# Adapted from: https://www.palletsprojects.com/p/flask/
# https://www.youtube.com/watch?v=6Qs3wObeWwc
# Run with: env FLASK_APP=random-wa.py flask run

# Imports
import flask as fl
import numpy as np
import base64
import logging
from PIL import ImageOps, Image
from flask import render_template
from keras.models import load_model

HEIGHT, WIDTH = 28,28
DIMENTIONS = HEIGHT, WIDTH



# Flask instance
app = fl.Flask(__name__)

# Home route for WebApp
@app.route('/')
def home():
  return render_template('index.html')


# Post route for uploading an image
@app.route('/uploadimage', methods=['GET', 'POST'])
def uploadimage():
  # Get the image from the request.
  theimage = fl.request.values['imageData']
  
  # Print to the console.
  print(theimage)

  


  # Decode the string to an image, from byte 22 on
  decodedimage = base64.b64decode(theimage[22:])
  

  # Try to save the image
  with open ("drawing.png", "wb") as f:
  	f.write(decodedimage)
  
  # resize image so it can be tested against the model
  resize_image()

  predict()
  # Return a response
  return decodedimage


def resize_image():
    # Adapted from: https://dev.to/preslavrachev/python-resizing-and-fitting-an-image-to-an-exact-size-13ic
    img = Image.open('drawing.png')
    size = (28, 28)
    img = ImageOps.fit(img, DIMENTIONS, Image.ANTIALIAS)
    img.save('drawing2.png')