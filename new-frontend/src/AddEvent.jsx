import {useState} from "react"

export default function AddEvent({events, setEvents}) {
     
    const [formData, setFormData] = useState({
        title : ""
    })
    
    //handles onChange
    function handleOnChange(e) {
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    return(
        <>
        <form action="">
            <input 
            name='name'
            type="text"
            value={formData.title}
            onChange={(e) => handleOnChange(e)}
            placeholder='Add event' 
            />
            <button type="submit">Add</button>
        </form>
        </>
    )
    
}