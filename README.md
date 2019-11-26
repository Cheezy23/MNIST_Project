# Hand Written Character Predictor using MNIST dataset
This project is part of an Emerging Technologies module I am completeing as part of my 4th Year Study in GMIT.

On completeion of this project there will be a web a
Lecturer: **Dr Ian McLoughin**

## Work Environment 
- MacOS Catolina
- Languages: **Python 3**
- Sublime Text

### Installing Anaconda and getting Jupyter notebook set up
There is a Graphical install version of Anaconda which can be found using the link below to get the latest version, as of making this the current stable build is `conda --version
conda 4.7.12`
- [Anaconda](http://anaconda.com)
- Jupyter notebook
- [Flask](https://flask.palletsprojects.com/en/1.1.x/) 
- [Tensorflow](https://www.tensorflow.org) <br> `pip install tensorflow`


## How To Run Jupyter
First start by cloning this repo to a directory on you device. You then need to make sure you have Anacona installed at version 4.7.12 or later.
Navigate to the project directory in Terminal, then run the command `jupyter notebook` or `jupyter lab` tho I had some issues with `lab` so i would advise you use `notebook` as it is a safer option.

This will open up your default browser with a GUI you can use to open the MNIST_Dataset_project.ipynb in a notebook.

## How to run Server and Webapp


## References
- [MNIST Dataset](http://yann.lecun.com/exdb/mnist/)
- [Helpful Youtube Tutorial](https://www.youtube.com/watch?v=wQ8BIBpya2k)
- [Linear Regression using Numpy](https://nbviewer.jupyter.org/github/ianmcloughlin/jupyter-teaching-notebooks/blob/master/simple-linear-regression.ipynb)
- [Creating single nuron in Keras](https://github.com/ianmcloughlin/jupyter-teaching-notebooks/blob/master/keras-neurons.ipynb)
- []()

## Added Notes
Tho the training set for MNIST can be downloaded from the website referenced above, there is a faster way by using th Tensorflow library in python.
Use the following code in python notebook
```python
import tensorflow as tf
mnistData = tf.keras.datasets.mnist;
```

## Breakdown 
