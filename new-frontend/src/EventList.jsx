import EventCard from "./EventCard"

export default function EventList({events, setEvents, filteredSearch}) {

    return (
        <>
        <h2>Events list</h2>
        <div className="events-list">
            {filteredSearch.map((event) => (
                <EventCard key={event.id} event={event}/>
            ))}
        </div>
        </>
    )
}