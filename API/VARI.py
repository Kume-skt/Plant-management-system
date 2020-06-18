import cv2
import math

img = cv2.imread('test.jpg')
height, width, channels = img.shape[:3]

for x in range(height):
    for y in range(width):
        b, g, r = img[x, y]
        # 色分け
        b = int(b)
        g = int(g)
        r = int(r)

        if (b, g, r) == (255, 255, 255):
            continue

        # 緑要素が強い部分のみ
        if r < g and b < g:
            # VARI算出
            v = (g - r) / (g + r - b)
            # 色作成
            vcolor = int(255 * math.sin(v * 2 * math.pi))
            v = v + 0.5
            # 色付け
            if v < 0.25:
                img[x, y] = 255, vcolor, 0
            elif 0.25 < v and v < 0.5:
                img[x, y] = vcolor, 255, 100
            elif 0.5 < v and v < 0.75:
                img[x, y] = 100, 255, -vcolor
            elif 0.75 < v and v < 1.0:
                img[x, y] = 0, -vcolor, 255
            else:
                img[x, y] = 0, 0, 255

        else:
            img[x, y] = 255, 0, 0

cv2.imwrite('test.png', img)
