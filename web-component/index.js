import './news-article.js';
import {topHeadlinesUrl} from './newsApi.js';

// we are not blocking the load of the page with our custom JS
window.addEventListener('load', () => {
    fetchNews().then();
})

async function fetchNews() {
    const res = await fetch(topHeadlinesUrl);
    const jsonResponseResult = await res.json();

    const mainTag = document.querySelector('main');

    jsonResponseResult.articles.forEach(article => {
        const articleCustomElement = document.createElement('news-article');
        articleCustomElement.article = article; // setting .article property, that is defined as a setter in the class

        mainTag.appendChild(articleCustomElement)
    })
}
