import './card-tile.js';

const projects = [
    'amazon-box',
    'card',
    'clock',
    'curved-background',
    'curves',
    'flying-balls',
    'game-character',
    'google-fonts',
    'gradient-loader',
    'horizontal-scroll',
    'image-comparison',
    'lantern-effect',
    'neon-button',
    'parallax-mouse-move',
    'particles-mouse-move',
    'parallax-scroll',
    'pizza-flexbox',
    'rain-effect',
    'ribbon',
    'sliding-menu',
    'social-icons',
    'spinning-wheel',
    'text-highlight'
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
