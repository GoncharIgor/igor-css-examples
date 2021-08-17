const mainBox =  document.querySelector('.mainbox');
const wheelElement =  document.querySelector('.wheel');

function spinWheel() {
    // if previous animation was still present
    mainBox.classList.remove('animate-arrow');

    const x = 2048; // min value
    const y = 9999; // max value
    const degValue = Math.floor(Math.random() * (x - y)) + y;

    wheelElement.style.transform = `rotate(${degValue}deg)`;
    wheelElement.classList.add('blur');

    const styles = window.getComputedStyle(mainBox,'::after')
    const right = styles['top'];
    console.log(right);
}

// css transition of .wheel element has ended
wheelElement.addEventListener('transitionend', () => {
    wheelElement.classList.remove('blur');
    mainBox.classList.add('animate-arrow');

    setTimeout(() => {
        mainBox.classList.remove('animate-arrow');
    }, 3000)
});

// to add dynamic slots
// https://codepen.io/dariocorsi/pen/YyeNRE
