// shadow DOM encapsulates all internal .css of component from other, global ones
// if we make web component with shadow DOM, then global .css import in index.html won't work
// and we need to define <style> tag here, inside setter

class NewsArticle extends HTMLElement {

    // creating shadow DOM
    constructor() {
        super();
        this.root = this.attachShadow({mode: 'open'})
    }

    set article(article) {
        // without shadow DOM, it would look like:
        // this.innerHTML = `...`

        this.root.innerHTML = `
        <style>
            h2 {
                font-family: Georgia, 'Times New Roman', Times, serif;
            }

            a,
            a:visited {
                text-decoration: none;
                color: inherit;
            }

            img {
                width: 100%;
            }
        </style>
        <a href="${article.url}">
            <h2>${article.title}</h2>
            <img src="${article.urlToImage} || ''"  alt="${article.title}"/>
            <p>${article.description || ''}</p>
        </a>
        `
    }
}

// register actual implementation of web component in browser
customElements.define('news-article', NewsArticle)
