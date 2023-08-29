from flask import Flask, request, jsonify
from models import db, Notification

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///notifications.db'  # Use your preferred database URL
db.init_app(app)

@app.route('/send_notification', methods=['POST'])
def send_notification():
    data = request.json
    new_notification = Notification(**data)
    db.session.add(new_notification)
    db.session.commit()
    return jsonify({"message": "Notification sent successfully"}), 201

@app.route('/get_notifications/<recipient>', methods=['GET'])
def get_notifications(recipient):
    notifications = Notification.query.filter_by(recipient=recipient).all()
    notification_list = [{"message": notification.message, "created_at": notification.created_at} for notification in notifications]
    return jsonify(notification_list)

# if __name__ == '__main__':
#     app.run(debug=True)
