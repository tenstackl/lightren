const input = document.querySelector('.search');
const drinks = document.querySelectorAll('li');

const searchEngine = e => {
    const text = e.target.value.toLowerCase();

    drinks.forEach(el => {
        if (el.textContent.toLowerCase().indexOf(text) !== -1) {
            el.style.display = "block";
        } else {
            el.style.display = "none";
        }
    })
}

input.addEventListener('keyup', searchEngine)