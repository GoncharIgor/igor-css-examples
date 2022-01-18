const navigationElements = document.querySelectorAll('.navigation');

navigationElements.forEach((navigationEl) => {
    navigationEl.addEventListener('click', () => {
        navigationEl.classList.toggle('active');
    });
})

// another way of adding onclick event listener:
// navigationEl.onclick = () => navigationEl.classList.toggle('active');
