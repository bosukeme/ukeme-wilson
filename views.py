from flask import Blueprint, render_template, Response
from flask_restful import Api, Resource

# from resources.user_resource import Registration, Login
# from resources.user_resource import Templates, TemplatesUpdate

class Home(Resource):
    def get(self):
        return Response(response=render_template('blog.html'))


class Skills(Resource):
    def get(self):
        return Response(response=render_template('skills.html'))


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
