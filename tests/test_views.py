from views import Home
from flask import current_app
from app import create_app



def test_home():

    assert 200 == 200