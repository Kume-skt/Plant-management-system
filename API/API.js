"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var mysql = __importStar(require("mysql"));
var mqtt = __importStar(require("mqtt"));
var client = mqtt.connect('mqtt://192.168.1.4');
var mqttsub_Data = {};
var app = express_1.default();
var port = 5000;
var ip = "localhost";
var userName = "kumeta";
var passWord = 'password';
var dataBase = "plant";
// const connecter = new DataBase(ip, userName, passWord, dataBase)
var connection = mysql.createConnection({
    host: ip,
    user: userName,
    password: passWord,
    database: dataBase,
    timezone: 'jst',
});
client.on('connect', function () {
    client.subscribe('kumeta/kumeta/#');
});
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(body_parser_1.default.urlencoded({
    extended: true
}));
app.use(body_parser_1.default.json());
////ここから下が本文
app.get('/', function (req, res) { return res.send('Hello World!'); });
app.get('/plant_mqtt', function (req, res) { return res.send(mqttsub_Data); });
// app.get('/plant_getData', (req, res) => res.send(connecter.get_Data('lab')));
app.get('/plant_getData', function (req, res) {
    connection.query("select * from lab", function (error, results, fields) {
        if (error)
            throw error;
        Datachange(results, "soil_value", 3000, 1300, 0, 100);
        Datachange(results, "water", 0, 2000, 0, 100);
        console.log("応答します");
        res.send(results);
    });
});
client.on('message', function (topic, message) {
    var mdata = JSON.parse(message.toString());
    Object.keys(mdata).map(function (data) { return mqttsub_Data[data] = mdata[data]; });
});
// Arudinoのマップ関数
function valueformat(value, in_min, in_max, out_min, out_max) {
    return Math.round((value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min);
}
// Arudinoのマップ関数
function Datachange(results, DataName, in_min, in_max, out_min, out_max) {
    var soil = Object.values(results).map(function (data) { return valueformat(data.soil_value, in_min, in_max, out_min, out_max); });
    Object.keys(results).map(function (data) { results[data][DataName] = soil[data]; });
}
app.listen(port, function () { return console.log("Example app listening on port " + port + "!"); });
