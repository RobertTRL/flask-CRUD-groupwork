import { useState, useEffect } from 'react'
import './App.css'
import Search from './Search'
import EventList from './EventList'
import AddEvent from './AddEvent'

function App() {
    const [events, setEvents] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
      fetch("http://127.0.0.1:5000/events")
          .then(res => res.json())
          .then(data => {
            setEvents(data)
            console.log(data)
        })
          .catch(err => console.log(err))
      }, [])

  // deleteDropdown.addEventListener("onChange", (e) => {
  //     deleteValue = deleteDropdown.value
  //     console.log(deleteValue)
  // })

  // // deleteButton.addEventListener("onClick", (e) => {
  // //     e.preventDefault()
  // //     fetch(`http://127.0.0.1:5000/events/${}`, )
  // // })

  // // <option value=item.id>item.title</option>
  // // searchBar.addEventListener("onChange", () => {

  // // })

  const filteredSearch = events.filter((event) => event.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
    <Search search = {search} setSearch = {setSearch}/>
    <EventList events = {events} setEvents = {setEvents}/>
    <AddEvent events={events} setEvents={setEvents}/>
    </>
  )
}

export default App
