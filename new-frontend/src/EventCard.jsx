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
    return(
        <div className="event-card">
        <div className="title-div">
            <p>{event.title}</p>
            <button type="button">Remove</button>
        </div>

        <form>
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