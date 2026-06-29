import { useState } from 'react'
import './App.css'

function App() {
  // TO BE CONVERTED TO REACT CODE
  // const resultsDiv = document.querySelector("#results")
  // const searchBar = document.querySelector("#search-bar")
  // const editDropdown = document.querySelector("#edit-dropdown")
  // const deleteDropdown = document.querySelector("#delete-dropdown")
  // const editButton = document.querySelector("#edit-button")
  // const deleteButton = document.querySelector("#delete-button")
  // let deleteValue = deleteDropdown.firstElementChild
  // let editValue = editDropdown.firstElementChild

  // document.addEventListener("DOMContentLoaded", () => {
  //     resultsDiv.innerHTML = ''
  //     editDropdown.innerHTML = ''
  //     deleteDropdown.innerHTML = ''

  //     fetch("http://127.0.0.1:5000/events")
  //         .then(res => res.json())
  //         .then(data => {
  //             data.map((item) => {
  //                 const eventDiv = document.createElement("div")
  //                 eventDiv.className = 'eventdiv'
  //                 const p = document.createElement("p")
  //                 const id = document.createElement("h3")
  //                 p.textContent = item.title
  //                 id.textContent = item.id
  //                 eventDiv.id = item.id
  //                 eventDiv.append(p, id)
  //                 resultsDiv.append(eventDiv)
  //                 const option = document.createElement("option")
  //                 option.value = item.id
  //                 option.textContent = item.title
  //                 option.addEventListener("click", () => {
  //                     console.log("Item has been clicked")
  //                     deleteValue = option
  //                     console.log(deleteValue)
  //                 })
  //                 editDropdown.append(option)
  //                 deleteDropdown.append(option)
  //             })
  //         })
  // })

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
  return (
    <main>
      <input type="text" placeholder="Search for an event" id="search-bar"/>
      <form>
          <h2>Edit event</h2>
          <select name="edit-events" id="edit-dropdown" class="dropdown">

          </select>
          <button id="edit-button">Edit</button>
      </form>

      <form>
          <h2>Create event</h2>
          <label for="">
              Enter event title
              <input type="text"/>
          </label>
          <button id="create-button">Create</button>
      </form>

      <form>
          <h2>Delete event</h2>
          <select name="edit-events" id="delete-dropdown" class="dropdown">

          </select>
          <button id="delete-button">Delete</button>
      </form>

      <div id="results">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia odit impedit dicta atque, autem magnam vel. Autem, quae incidunt assumenda quisquam cumque illo perferendis tempora, voluptate odio, alias a atque.</p>
      </div>
      
    </main>

  )
}

export default App
