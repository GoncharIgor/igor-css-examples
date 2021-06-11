class CardTile extends HTMLElement {
    formatName = (projectName) => {
        return projectName.split('-').join(' ')
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
