import random
import json
import pandas as pd
import numpy as np
import tensorflow
from sklearn.model_selection import train_test_split
from keras.models import Sequential
from keras.layers import Dense, Dropout

from numpy.random import seed



# file to use differents ML models and compare them

# load  the data 
#users_json = json.load(open('../data/accountData_clean.json'))

data = pd.read_json('../data/accountData_clean.json')
    
y = data.isFake
X = data.drop(['isFake'], axis=1)

#split data

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.4, random_state=242)



def prediction(user_id: int):
    # use the better model to predict if the user is fake or not
    # for the moment we return True or False randomly
    return random.choice([True, False])



def svm_prediction ():
   
    #Import svm model 
    from sklearn import svm

    #create a svm classifier
    clf = svm.SVC(kernel='linear', C=100.0) # Linear Kernel

    #train the model
    clf.fit(X_train,y_train)

    #predict the response for test dataset
    y_pred = clf.predict(X_test)

    #Import scikit-learn metrics module for accuracy calculation
    from sklearn import metrics

    # Model Accuracy: how often is the classifier correct?
    print("Accuracy:",metrics.accuracy_score(y_test, y_pred))


    # Model confusion   
    from sklearn.metrics import confusion_matrix        
    print(confusion_matrix(y_test, y_pred))

    # Model Precision
    #from sklearn.metrics import precision_score
    #print("Precision:",precision_score(y_test, y_pred))

#svm_prediction()

#data preprocessing for NN

X_train = data[pd.notnull(data['isFake'])].drop(['isFake'],axis=1)
y_train= data[pd.notnull(data['isFake'])]['isFake']
X_test = data[pd.isnull(data['isFake'])].drop(['isFake'],axis=1)

def NN_prediction(lyrs=[8], act='linear', opt='Adam', dr=0.0):


    #data preprocessing
   

      # set random seed for reproducibility
    seed(42)
    tensorflow.random.set_seed(42)
    
    model = Sequential()
    
    # create first hidden layer
    model.add(Dense(lyrs[0], input_dim=X_train.shape[1], activation=act))
    
    # create additional hidden layers
    for i in range(1,len(lyrs)):
        model.add(Dense(lyrs[i], activation=act))
    
    # add dropout, default is none
    model.add(Dropout(dr))
    
    # create output layer
    model.add(Dense(1, activation='sigmoid'))  # output layer
    
    model.compile(loss='binary_crossentropy', optimizer=opt, metrics=['accuracy'])
    
    print(model.summary())

    # fit the model
    training = model.fit(X_train, y_train, epochs=100, batch_size=32, validation_split=0.2, verbose=0)
    #print(training.history)
    val_acc = np.mean(training.history['val_accuracy'])
    print("\n%s: %.2f%%" % ('val_accuracycl', val_acc*100))

    # evaluate the model
    scores = model.evaluate(X_train, y_train)
    print("\n%s: %.2f%%" % (model.metrics_names[1], scores[1]*100))

    # make  predictions on test set
    #test['isFake'] = model.predict(X_test)
    #test['isFake'] = test['isFake'].apply(lambda x: round(x,0)).a
    #test['isFake'] = test['isFake'].astype(int)

    #solution(test[['id','isFake']])

NN_prediction()