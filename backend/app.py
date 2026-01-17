from flask import Flask
from flask_socketio import SocketIO, emit

app = Flask(__name__)


@app.route("/")
def root():
    return "Connected successfully to the backend server."


if __name__ == "__main__":
    app.run(debug=True, port=5000)
