const resultsDiv = document.querySelector("#results")
const searchBar = document.querySelector("#search-bar")
const editDropdown = document.querySelector("#edit-dropdown")
const deleteDropdown = document.querySelector("#delete-dropdown")

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
                editDropdown.append(option)
                deleteDropdown.append(option)
            })
        })
})

// <option value=item.id>item.title</option>
// searchBar.addEventListener("onChange", () => {

// })
