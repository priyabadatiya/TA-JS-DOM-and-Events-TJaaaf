var area = document.querySelector('.body')

function render(value) {
    var span = document.createElement('div')

    if (value) {
        span.style.border = '1px solid black'
    } else {
        span.style.border = '1px solid black'
        span.style.backgroundColor = '#' + (Math.random() * 9999999 + '').slice(0, 6);
    }
    span.innerText = Math.floor(Math.random() * (500 - 0) + 0);
    span.style.height = "4rem";
    span.style.width = "4rem";
    span.style.textAlign = 'center'
    span.style.fontSize = '24px'
    span.style.display = 'inline-block'
    area.append(span);
}

for (i = 1; i <= 500; i++) render(true)

area.addEventListener('mousemove', () => {
    area.innerHTML = '';
    for (i = 1; i <= 500; i++) render()
})