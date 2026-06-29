from flask import Flask, request, jsonify, make_response

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

# GET operations
@app.route("/events", method=["GET"])
def get_events():
    return jsonify([e.to_dict() for e in events])

@app.route("events/<int:event_id>", method=["GET"])
def get_event_by_id(event_id):
    specific_event = next((e for e in events if e.id == event_id), None)

    if not specific_event:
        return make_response("Event not found", 404)
    
    return jsonify(specific_event.to_dict())

# POST operations
@app.route("/events", method=["POST"])
def create_event():
    data = request.get_json()
    new_id = max([e.id for e in events]) + 1 if events else 1
    new_event = Event(new_id, title=data["title"])
    events.append(new_event)
    return jsonify(new_event.to_dict()) , 201

# PATCH operations
@app.route("/events/<int:event_id>", methods=["PATCH"])
def update_event(event_id):
    data = request.get_json()
    event = next((e for e in events if e.id == event_id), None)

    if not event:
        return ("Event not found", 404)
    
    if "title" in data:
        event.title = data["title"]
    
    return jsonify(event.to_dict())

if __name__ == "__main__":
    app.run(debug=True)
