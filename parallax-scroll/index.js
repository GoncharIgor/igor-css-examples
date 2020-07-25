const bg = document.getElementById('bg');
const moon = document.getElementById('moon');
const mountain = document.getElementById('mountain');
const road = document.getElementById('road');
const header = document.querySelector('h2');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    bg.style.top = `${value * 0.5}px`
    moon.style.left = `${-value * 0.2}px`
    mountain.style.top = `${-value * 0.15}px`
    road.style.top = `${value * 0.15}px`
    header.style.top = `${value}px`
})
