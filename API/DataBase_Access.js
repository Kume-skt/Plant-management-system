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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBase = void 0;
var mysql = __importStar(require("mysql"));
var DataBase = /** @class */ (function () {
    function DataBase(ip, userName, passWord, dataBase) {
        this.ip = ip;
        this.userName = userName;
        this.passWord = passWord;
        this.dataBase = dataBase;
        this.connecter = mysql.createConnection({
            host: this.ip,
            user: this.userName,
            password: this.passWord,
            database: this.dataBase
        });
        console.log("接続します");
        this.connecter.connect();
    }
    /**
     * add_Data
     */
    DataBase.prototype.add_Data = function (_a) {
        var tableName = _a.tableName, dataName = _a.dataName, data = _a.data;
        try {
            console.log("書き込み開始");
            // console.log(`insert into ${tableName}(${dataName})values (${data})`);
            return this.connecter.query("insert into " + tableName + "(" + dataName + ")values (" + data + ")");
        }
        catch (error) {
            console.log("データベースに書き込みが失敗しました");
            console.log(error);
        }
    };
    DataBase.prototype.get_Data = function (tableName) {
        try {
            console.log("データを取得します");
            this.connecter.query("select * from lab;", function (err, rows, fields) {
                if (err)
                    throw err;
                // let rejson: any = {}
                // let count: number = 0;
                // rows.map(function (data: any) {
                //     console.log("=============================");
                //     console.log(data);
                //     rejson[count] = data;
                //     count++;
                // }               
                // )
                // console.log(rejson);
                return rows;
            });
        }
        catch (error) {
            console.log(tableName + "\u306E\u30C7\u30FC\u30BF\u53D6\u5F97\u306B\u5931\u6557\u3057\u307E\u3057\u305F");
            console.log(error);
        }
    };
    return DataBase;
}());
exports.DataBase = DataBase;
