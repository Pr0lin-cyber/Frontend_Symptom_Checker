from flask import Flask, render_template
from flask_cors import CORS

app = Flask(__name__)

app.config.from_object(__name__)

CORS(app, resources={r"/*":{"origins": "*"}})

@app.route('/', methods=['Get','Post'])
def index():
    return ('Hello')
@app.route('/connect', methods=['Get','Post'])
def connect():
    return ('Hallo Vue Test')


