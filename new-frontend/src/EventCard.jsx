import { useState } from "react"

export default function EventCard({event}) {
    
    //edit form states
    const [editForm, setEditForm] = useState({
        title : event.title
    })

       //handles onChange
    function handleEditForm(e) {
        setEditForm({...editForm, [e.target.name] : e.target.value})
    }

    function handleEditSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:5000/events/${event.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(editForm)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

    function handleDelete() {
        fetch(`http://localhost:5000/events/${event.id}`, {
            method: 'DELETE'    
        })
        .then(res => res.json())
        .then(data => {
            alert(data.message)
            window.location.reload()
        })
        .catch(err => console.log(err))
    }
    return(
        <div className="event-card">
        <div className="title-div">
            <p>{event.title}</p>
            <button type="button" onClick={() => handleDelete()}>Remove</button>
        </div>

        <form onSubmit={(e) => handleEditSubmit(e)}>
            <input 
            type="text" 
            name='title'
            value={editForm.title}
            onChange={(e) => handleEditForm(e)}
            />
            <button type="submit">Edit</button>
        </form>
        </div>
    )
}