import cv2


class wedCamera():
    def __init__(self):
        self.cap = cv2.VideoCapture(0)  # 0はカメラのデバイス番号
     
    def __del__(self):
        self.video.release()

    def set_frame():
        global fream
        fream = "1"

    def capture_camera(self, mirror=True, size=None):
        """Capture video from camera"""
        # カメラをキャプチャする

        while True:
            # retは画像を取得成功フラグ
            ret, frame = self.cap.read()

            # 鏡のように映るか否か
            if mirror is True:
                frame = frame[:, ::-1]

            # フレームをリサイズ
            # sizeは例えば(800, 600)
            if size is not None and len(size) == 2:
                frame = cv2.resize(frame, size)

            # フレームを表示する
            cv2.imshow('camera capture', frame)

            k = cv2.waitKey(1)  # 1msec待つ
            if k == 27:  # ESCキーで終了
                break

    def get_frame(self):
        success, image = self.cap.read()
        ret, jpeg = cv2.imencode('.jpg', image)
        return jpeg.tobytes()


# wedCamera().get_frame()
