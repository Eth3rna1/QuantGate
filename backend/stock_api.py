"""
API implementation with necessary abstractions
to obtain the desired stock data
"""
import os
from datetime import datetime
from dotenv import load_dotenv
from alpaca.data.timeframe import TimeFrame
from alpaca.data.requests import StockBarsRequest
from alpaca.data.historical import StockHistoricalDataClient

# path is execute from root
load_dotenv("./backend/.env")

API_KEY = os.getenv("API_KEY")
SECRET_KEY = os.getenv("SECRET_KEY")

client = StockHistoricalDataClient(API_KEY, SECRET_KEY)

request_params = StockBarsRequest(
  symbol_or_symbols="SPY",
  timeframe=TimeFrame.Minute,
  start=datetime(2026, 1, 16, 9, 30),
  end=datetime(2026, 1, 16, 15, 0)
)

bars = client.get_stock_bars(request_params)

print(bars.df.T)
