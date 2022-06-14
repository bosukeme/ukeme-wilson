from flask import Flask
from views import user_bp


def create_app(settings_override=None):
    """
    Create a Flask application using the app factory pattern.

    :param settings_override: Override settings
    :return: Flask app
    """

    app = Flask(__name__, instance_relative_config=True)

    app.config.from_object('config.settings')
    app.config.from_pyfile('settings.py', silent=True)

    if settings_override:
        app.config.update(settings_override)

    app.logger.setLevel('DEBUG')
    app.register_blueprint(user_bp)
    
    app.secret_key = "lpage"

    return app



if __name__ == "__main__":
    app = create_app()
    app.run(debug=True, port=5000)