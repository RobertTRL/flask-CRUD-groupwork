from flask import Flask, requests, jsonify, make_response

app = Flask(__name__)

class Event:
    def __init__(self, id, title):
        self.id = id
        self.title = title

    def to_dict(self):
        return {"id": self.id, "title": self.title}


events = [
    Event(1, "Tech Meetup"),
    Event(2, "Python Workshop")
]

@app.route("/events", method=["GET"])
def get_events():
    return jsonify([e.to_dict() for e in events])

@app.route("events/<int:event_id>", method=["GET"])
def get_event_by_id(event_id):
    specific_event = next((e for e in events if e.id == event_id), None)

    if not specific_event:
        return make_response("Event not found", 404)
    
    return jsonify(specific_event.to_dict())

if __name__ == "__main__":
    app.run(debug=True)
