
from flask import Blueprint, render_template, redirect, url_for, request, flash, abort

main = Blueprint('main',__name__)    #maine is used for url_for()

@main.route('/')
@main.route('/home')
def home():      
    return render_template('home.html',title="Home")

@main.route('/profile')
def profile():      
    return render_template('profile.html',title="Profile")


