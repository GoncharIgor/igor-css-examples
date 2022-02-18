const body = document.querySelector('body');
const sidebar = body.querySelector('.sidebar');
const sidebarToggler = sidebar.querySelector('.toggle');
const searchField = sidebar.querySelector('.search-box');
const themeToggler = sidebar.querySelector('.toggle-switch');
const themeModeText = sidebar.querySelector('.mode-text');

sidebarToggler.addEventListener('click', () => {
    sidebar.classList.toggle('closed');
})

themeToggler.addEventListener('click', () => {
    body.classList.toggle('dark');

    themeModeText.innerText = body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
})
