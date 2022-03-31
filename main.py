# -*- coding: utf-8 -*-
from flask import Flask, render_template, request
import os

app = Flask(__name__, static_folder='./sources', static_url_path='/sources')

@app.route('/')
def index():
    # return "Hello World!"
    return app.send_static_file('html/index.html')

if __name__ == '__main__':
    # port = int(os.getenv("PORT"))
    port = 100
    app.run(debug=True, host='0.0.0.0', port=port)
