class CardTile extends HTMLElement {
    // Web-component Without shadow DOM

    formatName = (projectName) => {
        let result = projectName.split('-').join(' ');
        return result.charAt(0).toUpperCase() + result.slice(1);
    }

    set cardTile(project) {
        this.innerHTML = `
        <a href="${project}/index.html">
            <div class="card">
                <img src="${project}/result.png" alt="thumbnail for ${project}" style="width:100%">
                <div class="card-container">
                    <h4><b>${this.formatName(project)}</b></h4>
                </div>
            </div>
        </a>
        `
    }
}

customElements.define('card-tile', CardTile)
