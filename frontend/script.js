const resultsDiv = document.querySelector("#results")
const searchBar = document.querySelector("#search-bar")
const editDropdown = document.querySelector("#edit-dropdown")
const deleteDropdown = document.querySelector("#delete-dropdown")
const editButton = document.querySelector("#edit-button")
const deleteButton = document.querySelector("#delete-button")
let deleteValue = deleteDropdown.firstElementChild
let editValue = editDropdown.firstElementChild

document.addEventListener("DOMContentLoaded", () => {
    resultsDiv.innerHTML = ''
    editDropdown.innerHTML = ''
    deleteDropdown.innerHTML = ''

    fetch("http://127.0.0.1:5000/events")
        .then(res => res.json())
        .then(data => {
            data.map((item) => {
                const eventDiv = document.createElement("div")
                eventDiv.className = 'eventdiv'
                const p = document.createElement("p")
                const id = document.createElement("h3")
                p.textContent = item.title
                id.textContent = item.id
                eventDiv.id = item.id
                eventDiv.append(p, id)
                resultsDiv.append(eventDiv)
                const option = document.createElement("option")
                option.value = item.id
                option.textContent = item.title
                option.addEventListener("click", () => {
                    console.log("Item has been clicked")
                    deleteValue = option
                    console.log(deleteValue)
                })
                editDropdown.append(option)
                deleteDropdown.append(option)
            })
        })
})

deleteDropdown.addEventListener("onChange", (e) => {
    deleteValue = deleteDropdown.value
    console.log(deleteValue)
})

// deleteButton.addEventListener("onClick", (e) => {
//     e.preventDefault()
//     fetch(`http://127.0.0.1:5000/events/${}`, )
// })

// <option value=item.id>item.title</option>
// searchBar.addEventListener("onChange", () => {

// })
