from flask import Flask, Response, jsonify
from flask_cors import CORS
# webCamera取得
import webCamera as wc
# 天気取得
import YahooWeather as YW

app = Flask(__name__)
CORS(app)

webcamera = wc.wedCamera()


def gen(webcamera):
    while True:
        frame = webcamera.get_frame()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')

# returnではなくジェネレーターのyieldで逐次出力。
# Generatorとして働くためにgenとの関数名にしている
# Content-Type（送り返すファイルの種類として）multipart/x-mixed-replace を利用。
# HTTP応答によりサーバーが任意のタイミングで複数の文書を返し、紙芝居的にレンダリングを切り替えさせるもの。
# （※以下に解説参照あり）


@app.route('/')
def video_feed():
    return Response(gen(webcamera),
                    mimetype='multipart/x-mixed-replace; boundary=frame')


@app.route('/Weather')
def Weather():
    # return jsonify({"language": "python"})
    return jsonify(YW.get_Weather())


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, threaded=True)

# 0.0.0.0はすべてのアクセスを受け付けます。
# webブラウザーには、「localhost:5000」と入力
