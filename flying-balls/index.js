const renderBalls = (numBalls = 50) => {
    // Some random colors
    const colors = ['#3CC157', '#2AA7FF', '#1B1B1B', '#FCBC0F', '#F85F36'];

    const balls = [];

    for (let i = 0; i < numBalls; i++) {
        const ballSize = `${Math.random()}em`;

        let ball = document.createElement('div');
        ball.classList.add('ball');
        ball.style.background = colors[Math.floor(Math.random() * colors.length)];
        ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
        ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
        ball.style.transform = `scale(${Math.random()})`;
        ball.style.width = ballSize;
        ball.style.height = ballSize;

        balls.push(ball);
        document.body.append(ball);
    }

    // Keyframes
    balls.forEach((el, i) => {
        let to = {
            x: Math.random() * (i % 2 === 0 ? -11 : 11),
            y: Math.random() * 12
        };

        el.animate(
            [{ transform: 'translate(0, 0)' }, { transform: `translate(${to.x}rem, ${to.y}rem)` }],
            {
                duration: (Math.random() + 1) * 2000, // random duration
                direction: 'alternate',
                fill: 'both',
                iterations: Infinity,
                easing: 'ease-in-out'
            }
        );
    });
};

renderBalls(200);
