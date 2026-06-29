import { useState } from "react"

export default function AddEvent({events, setEvents}) {
     
    const [formData, setFormData] = useState({
        title : ""
    })
    
    //handles onChange
    function handleOnChange(e) {
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    function handleOnSubmit(e) {
        if (!formData.title) {
            alert("Please enter a title")
            return
        }
        e.preventDefault()
        fetch("http://localhost:5000/events", {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json' 
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            setEvents([...events, data])
            setFormData({...formData, title: ""})
        })
    }
    return(
        <div className="add-events">
            <h2>Add Event</h2>
        <form onSubmit={(e) => handleOnSubmit(e)}>
            <input 
            name='title'
            type="text"
            value={formData.title}
            onChange={(e) => handleOnChange(e)}
            placeholder='Add event' 
            />
            <button type="submit">Add</button>
        </form>
        </div>
    )
    
}