from . import db
from flask_login import UserMixin
from datetime import datetime


class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(30), unique=True)
    password = db.Column(db.String(100))
    name  = db.Column(db.String(100))    
    avatar = db.relationship('Avatar', backref='author', lazy=True)

class Avatar(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name  = db.Column(db.String(100))    
    personality = db.Column(db.String(100))
    date_posted = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    user_id= db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False) 



