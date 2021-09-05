from werkzeug.wrappers import AuthorizationMixin
from . import db
from .models import User
from .models import Avatar
from flask import Blueprint, render_template, redirect, url_for, request, flash, abort
from flask_login import current_user, login_required

avatar = Blueprint('avatar',__name__)  


@avatar.route('/newavatar')
@login_required  
def newavatar():      
    return render_template('addavatar.html',title="Add Avatar")

@avatar.route('/newavatar',methods=['POST'])
@login_required  
def newavatar_post():
    name=request.form.get('name')
    personality=request.form.get('personality')
    print(name,personality)
    avatar= Avatar(name=name,personality=personality, author=current_user)   
    db.session.commit()
    return redirect(url_for('avatar.newavatar'))


@avatar.route('/allavatars')
@login_required
def allavatars():
    user = User.query.filter_by(email=current_user.email).first_or_404()
    avatar=Avatar.query.filter_by(author=user)
    return render_template('allavatars.html',title="Your Avatars",avatar=avatar,usr=user)


@avatar.route("/avatar/<int:avatar_id>/update", methods=['GET', 'POST'])
@login_required
def update_avatar(avatar_id):
    avatar = Avatar.query.get_or_404(avatar_id)
    if request.method == "POST":
        avatar.name = request.form['name']
        avatar.personality = request.form['personality']
        db.session.commit()
        return redirect(url_for('avatar.allavatars'))

    return render_template('update_avtar.html', avatar=avatar)

@avatar.route("/workout/<int:avatar_id>/delete", methods=['GET', 'POST'])
@login_required
def delete_avatar(avatar_id):
    avatar = Avatar.query.get_or_404(avatar_id)
    db.session.delete(avatar)
    db.session.commit()
    return redirect(url_for("avatar.allavatars"))    
