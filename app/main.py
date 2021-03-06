
from . import db
from .models import User
from flask import Blueprint, render_template, redirect, url_for, request, flash, abort
from flask_login import current_user, login_required

main = Blueprint('main',__name__)    

@main.route('/')
@main.route('/home')
def home():      
    return render_template('home.html',title="Home")

@main.route('/profile')
@login_required
def profile():      
    return render_template('profile.html',title="Profile",name=current_user.name)    


