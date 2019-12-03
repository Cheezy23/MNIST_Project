# Adapted from: https://www.palletsprojects.com/p/flask/
# Run with: env FLASK_APP=random-wa.py flask run

# Imports
import flask as fl
from flask import render_template
import numpy as np
import base64

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
  theimage = fl.request.values.get("theimage", "")
  # Print to the console.
  print(theimage)
  # Decode the string to an image
  decodedimage = base64.b64decode(theimage[22:])
  # Try to save the image
  with open ("drawing.png", "wb") as f:
  	f.write(decodedimage)
  # Return a response
  return {"message": theimage}


# Route for predict POST
  @app.route('/predict', methods=['POST'])
  def predict():
    return {"message": theimage}