import EventCard from "./EventCard"

export default function EventList({events}) {

    return (
        <>
        <h2>Events list</h2>
        <div className="events-list">
            {events.map((event) => (
                <EventCard key={event.id} event={event}/>
            ))}
        </div>
        </>
    )
}