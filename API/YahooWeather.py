import urllib3
from bs4 import BeautifulSoup
import re


def get_Weather():
    # アクセスするURL
    url = 'https://weather.yahoo.co.jp/weather/jp/13/4410.html'

    # URLにアクセスする 戻り値にはアクセスした結果やHTMLなどが入ったinstanceが帰ってきます
    http = urllib3.PoolManager()
    instance = http.request('GET', url)
    # instanceからHTMLを取り出して、BeautifulSoupで扱えるようにパースします
    soup = BeautifulSoup(instance.data, 'html.parser')
    # 最高気温取得
    tenki_high = soup.select_one(
        '#main > div.forecastCity > table > tr > td > div > ul > li.high')
    # 最低気温取得
    tenki_low = soup.select_one(
        '#main > div.forecastCity > table > tr > td > div > ul > li.low')
    # 画像取得
    tenki_img = soup.select_one(
        '#main > div.forecastCity > table > tr > td > div > p.pict > img')
    return {
        "img": re.sub('<.*src="', "", str(tenki_img))[:-3],
        "high": re.sub(r'<.+?>', "", str(tenki_high)),
        "low": re.sub(r'<.+?>', "", str(tenki_low))
    }