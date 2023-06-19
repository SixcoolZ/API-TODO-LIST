const body = document.body;
const token = localStorage.token


fetch("https://todo-ts-cs5q.onrender.com/api/todo", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` }
}).then(res => res.json())
.then(data => {
    data.forEach((item) => {
        const checkBox = document.createElement('input')
        checkBox.setAttribute('type', "checkbox")

        const p  = document.createElement('p')
        p.textContent = item.title

        body.append(checkBox, p)
    })
})