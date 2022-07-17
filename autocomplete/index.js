const searchInputEl = document.getElementById('search');
const matchListEl = document.getElementById('match-list');

const createResultList = (matchedStates) => {
    if (matchedStates.length) {
        const listItemsHtml = matchedStates.map(state => {
            /*
            // DOM methods approach.
            // Also we need to clean prev. state at the beginning of f(): matchListEl.innerHTML = '';

            const itemNode = document.createElement('div');
            itemNode.classList.add('card', 'card-body', 'mb-1');
            itemNode.innerHTML = `${state.name} (${state.abbr})`;
            matchListEl.appendChild(itemNode);
            */

            return `
            <div class="card card-body mb-1">
                <h4>${state.name} (${state.abbr}) <span class="text-primary">${state.capital}</span>
                </h4>
                <small>Lat: ${state.lat} / Long: ${state.long}</small>
            </div>
            `;
        }).join(''); // making 1 string from map array

        matchListEl.innerHTML = listItemsHtml;
    }
};

const searchStates = async (event) => {
    const searchedValue = event.target.value;
    const res = await fetch('./data/states.json');
    const states = await res.json(); // axios gives json result automatically

    // not to return all values on empty string
    if (!searchedValue) {
        matchListEl.innerHTML = '';
        return [];
    }

    let matchedStates = states.filter(state => {
        const regEx = new RegExp(`^${searchedValue}`, 'gi'); // ^ - match only startsWith

        // check if state name or its abbreviation match
        return state.name.match(regEx) || state.abbr.match(regEx);
    });

    createResultList(matchedStates);
};

// The oninput event it's an event that triggers whenever the input changes: both keydown and paste
searchInputEl.addEventListener('input', searchStates);

