import './card-tile.js';

const projects = [
    'action-buttons',
    'amazon-box',
    'autocomplete',
    'book',
    'card',
    'clock',
    'curved-background',
    'curves',
    'flying-balls',
    'game-character',
    'game-healthbar',
    'game-text-box',
    'game-inventory',
    'glass-card',
    'google-fonts',
    'gradient-loader',
    'horizontal-scroll',
    'image-comparison',
    'isometric-menu',
    'lantern-effect',
    'neon-button',
    'parallax-mouse-move',
    'particles-mouse-move',
    'parallax-scroll',
    'pizza-flexbox',
    'rain-effect',
    'ribbon',
    'sidebar',
    'sliding-menu',
    'social-icons',
    'spinning-wheel',
    'text-highlight',
    'text-portrait'
];

const articlesGridWrapper = document.getElementById('articles-grid-wrapper');

projects.forEach(project => {
    createCardTile(project);
});

function createCardTile(projectName) {
    const cardTileElement = document.createElement('card-tile');
    cardTileElement.cardTile = projectName; // cardTile - setter inside card-tile.js

    articlesGridWrapper.appendChild(cardTileElement);
}

// createCardTile('projectName');
