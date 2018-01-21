# USAGE
# python detect.py --images images

# import the necessary packages
from __future__ import print_function

import datetime
from imutils.object_detection import non_max_suppression
import numpy as np
import imutils
import cv2

# construct the argument parse and parse the arguments
# ap = argparse.ArgumentParser()
# ap.add_argument("-i", "--images", required=True, help="path to images directory")
# args = vars(ap.parse_args())

# initialize the HOG descriptor/person detector
hog = cv2.HOGDescriptor()
hog.setSVMDetector(cv2.HOGDescriptor_getDefaultPeopleDetector())

# loop over the image paths
# imagePaths = list(paths.list_images(args["images"]))
# cap = cv2.VideoCapture(0)

cap = cv2.VideoCapture('testvideo.mp4')

records = open('records.txt', 'w+')
state = open('state.txt', 'w+')

while (True):
    customers_count = 0
    # load the image and resize it to (1) reduce detection time
    # and (2) improve detection accuracy
    ret, image = cap.read()
    if image is None:
        print("Recycle")
        cap = cv2.VideoCapture('testvideo.mp4')
        ret, image = cap.read()

    image = imutils.resize(image, width=min(400, image.shape[1]))
    orig = image.copy()

    # detect people in the image
    (rects, weights) = hog.detectMultiScale(image, winStride=(4, 4),
                                            padding=(8, 8), scale=1.05)

    if len(rects) > 0:
        # draw the original bounding boxes
        for (x, y, w, h) in rects:
            cv2.rectangle(orig, (x, y), (x + w, y + h), (0, 0, 255), 2)

        # apply non-maxima suppression to the bounding boxes using a
        # fairly large overlap threshold to try to maintain overlapping
        # boxes that are still people
        rects = np.array([[x, y, x + w, y + h] for (x, y, w, h) in rects])
        pick = non_max_suppression(rects, probs=None, overlapThresh=0.70)

        customers_count = len(pick)

        # draw the final bounding boxes
        for (xA, yA, xB, yB) in rects:
            cv2.rectangle(image, (xA, yA), (xB, yB), (0, 255, 0), 2)

        # show some information on the number of bounding boxes
        # filename = imagePath[imagePath.rfind("/") + 1:]
        # print("[INFO] {}: {} original boxes, {} after suppression".format(
        # 	filename, len(rects), len(pick)))
        now = datetime.datetime.now()

        record = '%i  %s\n' % (customers_count, str(now))
        records.write(record)

        state.seek(0)
        state.write(record)
    # show the output images
    cv2.imshow("After NMS", image)
    cv2.waitKey(1)

# time.sleep(0.3)
records.close()
state.close()
