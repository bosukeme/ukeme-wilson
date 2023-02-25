""" Settings added as specified in following link
http://docs.gunicorn.org/en/stable/settings.html
"""

accesslog = "-"

bind = "{}:{}".format("0.0.0.0", "5000")
workers = 6
threads = 2
