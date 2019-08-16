#!/usr/bin/env python
# coding: utf-8
#from summarize import Summarizer
# 
import sys

sys.path.append('venv/lib/python3.7/site-packages')

from flask import Flask, jsonify, request
import model
from flask_cors import CORS

print(sys.path)

app = Flask(__name__)
# summarizer = Summarizer()
CORS(app)


@app.route('/', methods=['GET', 'POST', 'DELETE', 'PUT'])                                                                                                    
def classifier():
	data = request.get_json()
	print('data')
	print(data)
	result = model.getPredict(data['season'],data['holiday'],data['workingday'],data['weather'],data['temp'],data['humidity'],data['windspeed'],data['casual'],data['registered'])
	print('RESULT')
	print(result)
	return jsonify({"result": result})

    # return(data)

if '__name__' == "__main__":
    app.run()

