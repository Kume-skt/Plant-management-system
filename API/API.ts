import express from "express";
import { DataBase } from "./DataBase_Access"
import bodyParser from 'body-parser'
import * as mysql from 'mysql'

const app: express.Express = express();
const port: number = 5000;

const ip = "localhost"
const userName = "kumeta"
const passWord = 'password'
const dataBase = "plant"

// const connecter = new DataBase(ip, userName, passWord, dataBase)
const connection = mysql.createConnection({
    host: ip,
    user: userName,
    password: passWord,
    database: dataBase,
    timezone: 'jst',//timezoneの指定省略の場合はシステムローカルになる
});
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())

////ここから下が本文

app.get('/', (req, res) => res.send('Hello World!'));

// app.get('/plant_getData', (req, res) => res.send(connecter.get_Data('lab')));
app.get('/plant_getData', function (req, res) {
    connection.query("select * from lab", function (
        error,
        results,
        fields
    ) {
        if (error) throw error;

        Datachange(results, "soil_value", 3000, 1300, 0, 100);
        Datachange(results, "water", 0, 2000, 0, 100);
        console.log("応答します");

        res.send(results);
    });
});
// Arudinoのマップ関数
function valueformat(value: number, in_min: number, in_max: number, out_min: number, out_max: number) {
    return Math.round((value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min);
}

// Arudinoのマップ関数
function Datachange(results: any, DataName: string, in_min: number, in_max: number, out_min: number, out_max: number) {
    const soil = Object.values(results).map((data: any) => { return valueformat(data.soil_value, in_min, in_max, out_min, out_max); });

    Object.keys(results).map((data: any) => { results[data][DataName] = soil[data]; });

}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));