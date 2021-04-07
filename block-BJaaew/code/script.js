let parentDiv = document.querySelector(".container");
let div = document.querySelector(".flex");
let inputSearch = document.getElementById("search");
let allPeople = got.houses.map(house => house.people).flat();
console.log(allPeople);

function render(array) {
    console.log(array);
    div.innerHTML = "";
    array.forEach(person => {
        let article = document.createElement("article");
        article.classList.add("flex-30");
        let image = document.createElement("img");
        image.src = person.image;
        let heading = document.createElement("h2");
        heading.innerText = person.name;
        let flexDiv = document.querySelector("div");
        article.classList.add("flex-child");
        flexDiv.append(image, heading);
        let para = document.createElement("p");
        para.innerText = person.description;
        let button = document.createElement("button");
        button.innerText = "Learn More!";
        button.href = person.wikiLink;
        article.append(image, heading, para, button);
        div.append(article);
        parentDiv.append(div);
    });
}
render(allPeople);

document.querySelector(".search-buttons").addEventListener("click", e => {
    if (e.target.classList.contains("btn")) {
        console.log(e.target.innerText);
        const house = got.houses.find(
            house => house.name.toUpperCase() === e.target.innerText.toUpperCase()
        );
        console.log(house.people);
        render(house.people);
    }
});

inputSearch.addEventListener("input", event => {
    let inputVal = event.target.value.toLowerCase();
    console.log(inputVal);
    let filteredNames = allPeople.filter(v =>
        v.name.toLowerCase().includes(inputVal)
    );
    console.log(filteredNames);
    render(filteredNames);
});