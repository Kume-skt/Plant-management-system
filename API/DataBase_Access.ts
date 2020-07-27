import * as mysql from "mysql"


export class DataBase {
    private ip: string;
    private userName: string;
    private passWord: string;
    private dataBase: string;
    private connecter: mysql.Connection;
    constructor(ip: string, userName: string, passWord: string, dataBase: string) {
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
    add_Data({ tableName, dataName, data }: { tableName: String; dataName: any; data: any; }) {
        try {
            console.log("書き込み開始");
            // console.log(`insert into ${tableName}(${dataName})values (${data})`);

            return this.connecter.query(`insert into ${tableName}(${dataName})values (${data})`);
        } catch (error) {

            console.log("データベースに書き込みが失敗しました");
            console.log(error);

        }
     }
    get_Data(tableName: string) {
        try {
            console.log("データを取得します");
            this.connecter.query(`select * from lab;`, (err, rows, fields) => {
                if (err) throw err;
                
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
        } catch (error) {

            console.log(`${tableName}のデータ取得に失敗しました`);
            console.log(error);

        }
    }
}

