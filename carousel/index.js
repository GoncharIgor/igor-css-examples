// all the main elements in html have "data-" attribute, so it's easier to grab them

const buttons = document.querySelectorAll('[data-carousel-button]'); //data attribute is used

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // dataset - access to data-carousel-button attribute in html. We check if it's 'next' or 'prev'
        const directionOffset = button.dataset.carouselButton === 'next' ? 1 : -1;

        // find the closes parent with attribute [data-carousel-button]
        const carouselParentDiv = button.closest('[data-carousel]');
        const slidesList = carouselParentDiv.querySelector('[data-slides]');

        const activeSlide = slidesList.querySelector('[data-active]');
        const allListItems = [...slidesList.children]; // convert all <li> to an array
        let newActiveIndex = allListItems.indexOf(activeSlide) + directionOffset;

        // to make images loop: from last one to jump to 1-st one
        if (newActiveIndex >= allListItems.length) {
            newActiveIndex = 0
        } else if (newActiveIndex < 0) {
            newActiveIndex = allListItems.length - 1;
        }

        allListItems[newActiveIndex].dataset.active = true; // adds [data-active] attr
        delete activeSlide.dataset.active; // removes [data-active] attr
    })
})
