import urllib3
from bs4 import BeautifulSoup

# アクセスするURL
url = 'https://weather.yahoo.co.jp/weather/jp/13/4410.html'

# URLにアクセスする 戻り値にはアクセスした結果やHTMLなどが入ったinstanceが帰ってきます
http = urllib3.PoolManager()
instance = http.request('GET', url)
# instanceからHTMLを取り出して、BeautifulSoupで扱えるようにパースします
soup = BeautifulSoup(instance.data, 'html.parser')
tenki_ond = soup.select_one('#main > div.forecastCity > table > tr > td > div > ul > li.high')
print(tenki_ond.text)
tenki_ond = soup.select_one('#main > div.forecastCity > table > tr > td > div > ul > li.low')
print(tenki_ond.text)
tenki_ond = soup.select_one('#main > div.forecastCity > table > tr > td > div > p.pict > img')
print(tenki_ond)
# # CSSセレクターで天気のテキストを取得します。
# # 今日の天気
# tenki_today = soup.select_one(
#     '#main > div.forecastCity > table > tr > td > div > p.pict')
# print("今日の天気は" + tenki_today.text)

# # 明日の天気
# tenki_tomorrow = soup.select_one(
#     '#main > div.forecastCity > table > tr > td + td > div > p.pict')
# print("明日の天気は" + tenki_tomorrow.text)

# # 一瞬で画面が消えないよう入力されるまで待機
# input()
