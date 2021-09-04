from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager

db = SQLAlchemy()

def create_app():
    app=Flask(__name__)
    app.config['SECRET_KEY'] = "<s0Me@@KEy>"
    app.config['SQLALCHEMY_DATABASE_URI']= 'sqlite:///db.sqlite:'
    #app.config['SESSION_PERMANENT']= False 
    app.config['SESSION_TYPE']= 'filesystem'

    db.init_app(app)

    login_manager = LoginManager()
    login_manager.login_view = 'auth.login'
    login_manager.init_app(app)

    from .models import User

    @login_manager.user_loader
    def load_user(user_id):
        return User.query.get(int(user_id))

    from .main import main as main_blueprint
    app.register_blueprint(main_blueprint)

    from .auth import auth as auth_blueprint
    app.register_blueprint(auth_blueprint)

    #from .WorkoutCRUD import Workout as works_blueprint
    #app.register_blueprint(works_blueprint)

    return app
