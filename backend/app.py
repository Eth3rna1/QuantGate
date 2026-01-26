from flask import Flask
from flask_socketio import SocketIO, emit
from alpaca.data.historical import CryptoHistoricalDataClient

app = Flask(__name__)
socket = SocketIO(app, cors_allowed_origins="http://localhost:3000")

@app.route("/")
def root():
    return "Backend server is running correctly..."


@socket.on("onconnect")
def on_connect(data):
    emit("server_response", { "msg" : "Hello, client!"})
    return f"<h1>{data}</h1>"


if __name__ == "__main__":
    socket.run(app, debug=True, port=5000)
