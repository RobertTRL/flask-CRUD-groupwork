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
        <>
        <div>
            <p>{event.title}</p>
        </div>

         {/* edit form */}
        <form>
            <input 
            type="text" 
            name='title'
            value={editForm.title}
            onChange={(e) => handleEditForm(e)}
            />
        </form>
        </>
    )
}