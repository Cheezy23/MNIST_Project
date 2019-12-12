# Hand Written Character Predictor using MNIST dataset
This project is part of an Emerging Technologies module I am completeing as part of my 4th Year Study in GMIT.

On completeion of this project there will be a web a
Lecturer: **Dr Ian McLoughin**

## WebApp
The WebApp was designed so that anyone can try out the nural network for themselves.
It is a simple webpage that has a canvas to draw on and two buttons, Predict and clear.
To get started all you need to do is draw a digit between 0 - 9 on the canvas and click predict.
The webapp will send a request back to the `flask` server which will load a pre-designed nural network.
It will then run the image though it and predict what digit was drawn.


## MNIST
The MNIST dataset is made up of 60'000 training images and 10'000 test images. It is widly used in the field of nural networks for training and testing. Another great use is in image processing systems to recognise handwritten digits.
The dataset is made up of 70'000 hand written digits between 0-9 that you can use to train a nural network to be able to predict what hand written number you have given it.

Obviously this takes a bit of work, so as part of my college module, Emerging Technologies, the class was given this solo project to do to show how to create a Nural Network and as an addition also create a flask server to alow a user to draw a digit in a canvas and predict its value.


## Work Environment 
- MacOS Catolina
- Languages: **Python 3**
- Sublime Text

### Installing Anaconda and getting Jupyter notebook set up
There is a Graphical install version of Anaconda which can be found using the link below to get the latest version, as of making this the current stable build is `conda --version
conda 4.7.12`
- [Anaconda](http://anaconda.com)
- [Jupyter notebook](https://jupyter.org/)
- [Flask](https://flask.palletsprojects.com/en/1.1.x/) 
- [Tensorflow](https://www.tensorflow.org) <br> `pip install tensorflow`


## How To Run Jupyter
- First start by cloning this repo to a directory on you device. You then need to make sure you have Anacona installed at version 4.7.12 or later.
- Navigate to the project directory in Terminal, then run the command `jupyter notebook` or `jupyter lab` tho I had some issues with `lab` so i would advise you use `notebook` as it is a safer option.

This will open up your default browser with a GUI you can use to open the MNIST_Dataset_project.ipynb in a notebook.

## How to run Webapp Server 
- Navigate to the WebApp directory in the main project folder using `Terminal`
- When in the WebApp dir run the following command `export FLASK_APP=FlaskServer.py`
- Straight after enter `flask run`
- It should now say by default that it is ` * Running on http://127.0.0.1:5000/`
- Now use your browser to access the webapp at that address or the one it provides you.


## References
- [MNIST Dataset](http://yann.lecun.com/exdb/mnist/)
- [Helpful Youtube Tutorial](https://www.youtube.com/watch?v=wQ8BIBpya2k)
- [Linear Regression using Numpy](https://nbviewer.jupyter.org/github/ianmcloughlin/jupyter-teaching-notebooks/blob/master/simple-linear-regression.ipynb)
- [Creating single nuron in Keras](https://github.com/ianmcloughlin/jupyter-teaching-notebooks/blob/master/keras-neurons.ipynb)

