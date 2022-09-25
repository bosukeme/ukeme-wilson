from flask import Blueprint, render_template, Response
from flask_restful import Api, Resource
import random

# from resources.user_resource import Registration, Login
# from resources.user_resource import Templates, TemplatesUpdate

SKILLS = [ 
    "SQL", "FLASK", "SPACY",
    "DOCKER", "PANDAS", "NUMPY",
    "PYMONGO","TWEEPY","TWINT",
    "SELENIUM","REQUESTS","OPENCV",
    "DOCKER SWARM", "SQLALCHEMY",
    "SKLEARN", "REGEX", "REDIS", 
    "PILLOW", "NLTK", "MATPLOTLIB",
    "HCLOUD", "DUCKDUCKGO", "DJANGO",
    "CELERY", "CLOUDINARY"
]


PERCENT_FILL = [random.randint(79,95) for item in range(len(SKILLS))]

SKILLS_PERCENT = tuple(zip(SKILLS, PERCENT_FILL))


class Home(Resource):
    def get(self):
        # return Response(response=render_template('blog.html'))
        return Response(response=render_template('Home.html'))


class Skills(Resource):
    def get(self):
        return Response(response=render_template('skills.html', SKILLS_PERCENT = SKILLS_PERCENT))


class Medium(Resource):
    def get(self):
        return Response(response=render_template('medium.html'))




user_bp = Blueprint("bot", __name__)

api = Api(user_bp)

api.add_resource(Home, '/')
api.add_resource(Skills, '/skills')
api.add_resource(Medium, '/medium')

# api.add_resource(Registration, "/register")
# api.add_resource(Login, "/login")
# api.add_resource(Templates, "/template")
# api.add_resource(TemplatesUpdate, "/template/<string:template_id>")


# clear-mistletoe-zmutw53pjmb5gyuc5y3agu2u.herokudns.com