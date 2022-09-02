import './card-tile.js';

const projects = [
    'action-buttons',
    'accordion',
    'amazon-box',
    'autocomplete',
    'book',
    'clip-image',
    'card',
    'carousel',
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
    'strikethrough',
    'text-highlight',
    'text-portrait',
    'water-drops'
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
