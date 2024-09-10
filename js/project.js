const config = {
    parentId: "project__cards"
}

window.onload = () => {
    const parent = document.getElementById("project__cards");
    fetch('project.json')
    .then(response => response.json())
    .then(data => {
        for (let cardKey in data) {
            parent.append(generateProjectCard(data[cardKey]));
        }
    });
}

function generateProjectCard(card) {
    const container = document.getElementById("card__content");
    let htmlString = `
        <div class="col">
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">${card.title}</h5>
                    <p class="card-text">${card.summary}</p>
                </div>
                <p><a href="${card.source}" class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">GitHub link</a></p>
            </div>
        </div>
    `;
    container.innerHTML += htmlString;
    return container;
}