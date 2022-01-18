const textContainer = document.querySelector('.text-box')

// putting all characters at once and then changing their opacity is better for:
// - performance - you don't need to re-render the whole content
// - text jumping - no line breaks

const speeds = {
    pause: 500,
    slow: 120,
    normal: 70,
    fast: 40
}

const textLines = [
    {text: 'Hey,', speed: speeds.normal},
    {text: 'How are you?', speed: speeds.normal, classes: ['green']},
    {text: "I'm great!", speed: speeds.fast}
];

const characters = [];

textLines.map((line, index) => {
    if (index < textLines.length - 1) {
        // adding space to all lines at the end, except the last line
        line.text += ' ';
    }

    line.text.split('').forEach(character => {
        const span = document.createElement('span');
        span.textContent = character;
        textContainer.appendChild(span);

        characters.push({
            span,
            isSpace: character === ' ',
            delayAfter: line.speed,
            classes: line.classes || []
        })
    })
})

// recursive f()
function revealOneChar(list) {
    // splice() - modifies original array: removes 1-st item and returns it as a part of new array
    const next = list.splice(0, 1)[0];
    next.span.classList.add('revealed');
    next.classes.forEach(c => {
        next.span.classList.add(c);
    })

    const delay = next.isSpace ? 0 : next.delayAfter;

    if (list.length > 0) {
        setTimeout(() => {
            revealOneChar(list);
        }, delay);
    }
}

revealOneChar(characters);
