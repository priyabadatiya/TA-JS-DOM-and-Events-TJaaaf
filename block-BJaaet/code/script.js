let input = document.getElementById("movie")
let ul = document.querySelector(".unordered")
let store = [];
let count = 0;

function handleChange(event) {

    if (event.keyCode == 13) {
        count++
        store.push({ movieName: event.target.value, isSeen: false, id: count })
        render()
        event.target.value = '';
    }
}
input.addEventListener("keyup", handleChange)


function render() {
    ul.innerHTML = ''
    store.map((ele) => {
            var li = document.createElement("li")
            var input = document.createElement("input")
            input.type = "checkbox"
            input.id = ele.id
            input.addEventListener('click', handleCheck)
            input.checked = ele.isSeen
            var span = document.createElement("span")
            span.innerText = ele.movieName
            span.addEventListener('click', handleShow)
            var button = document.createElement("button")
            button.id = ele.id
            button.innerText = "X"
            button.addEventListener('click', handleDelete)
            li.append(input, span, button)
            ul.append(li)
        }

    )
}

function handleCheck(event) {
    console.log(store)
    store = store.map((ele) => {

        if (ele.id == event.target.id) {
            ele.isSeen = !ele.isSeen
            return ele
        } else
            return ele
    })
    render()
}

function handleDelete(event) {
    store = store.filter((ele) => ele.id != event.target.id)
    render()
}

function handleShow(event) {
    input.value = event.target.innerText
}