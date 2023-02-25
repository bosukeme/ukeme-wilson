import os

from werkzeug.middleware.proxy_fix import ProxyFix

from app import create_app

app = create_app()

# You only need ProxyFix if your app is deployed behind an ELB.
# It adds the `Forwarded` headers
app.wsgi_app = ProxyFix(app.wsgi_app)
