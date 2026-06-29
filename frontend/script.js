const resultsDiv = document.querySelector("#results")

document.addEventListener("DOMContentLoaded", () => {
    resultsDiv.innerHTML = ''

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
            })
        })
})
