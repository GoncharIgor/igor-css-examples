// CSSStyleDeclaration.setProperty() - sets a new value for a property on a CSS style declaration object

const healthLiquidFills = document.querySelectorAll('.healthbar__fill');

const maxHP = 100;
let currentHP = 100;

function updateHP(changeHP) {
    currentHP = (currentHP + changeHP > maxHP) ? maxHP : currentHP + changeHP;
    if (currentHP < 0) {
        currentHP = 0;
    }
    renderHealthLiquidFills();
}

function renderHealthLiquidFills() {
    const percentHP = currentHP / maxHP * 100;

    // Apply color values to css variables
    document.documentElement.style.setProperty('--bar-fill', '#57e705');
    document.documentElement.style.setProperty('--bar-top', '#6aff03');

    if (percentHP <= 50) {
        document.documentElement.style.setProperty('--bar-fill', '#d6ed20');
        document.documentElement.style.setProperty('--bar-top', '#d8ff48');
    }
    if (percentHP <= 25) {
        document.documentElement.style.setProperty('--bar-fill', '#ec290a');
        document.documentElement.style.setProperty('--bar-top', '#ff3818');
    }

    healthLiquidFills.forEach(fill => {
        fill.style.width = `${percentHP}%`;
    })
}

// init 1-st Rendering with default 50 HP
updateHP(-50)
