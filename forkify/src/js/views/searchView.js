import {elements} from './base';

export const getInput = () => elements.searchInput.value;

const renderrecipe = (recipe) => {
   const markup =
    `
    <li>
    <a class="results__link results__link--active" href="#${recipe.recipe_id}">
        <figure class="results__fig">
            <img src="${recipe.image_url}" alt="${recipe.title}">
        </figure>
        <div class="results__data">
            <h4 class="results__name">${recipe.title}</h4>
            <p class="results__author">${recipe.publisher}</p>
        </div>
    </a>
    </li>
    `
    elements.searchResList.insertAdjacentHTML('beforeend', markup);
}
const createButton = (page,type) => `
    <button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page-1 : page+1}>
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
        </svg>
        <span>Page ${type ==='prev'? page-1 : page+1}</span>
    </button>
`
const renderButtons = (page, numResults, resPerPage) => {
    const pages = Math.ceil(numResults/resPerPage)
    let button;
    if(page === 1 && pages > 1){
        button = createButton(page, 'next')
    }else if(page < pages){
        button = `${createButton(page, 'prev')}
                  ${createButton(page,'next')} 
                `
    }else if(page === pages && pages > 1){
        button = createButton(page, 'prev')
    }
    elements.searchResPages.insertAdjacentHTML('afterbegin', button)
 
}
export const renderResult = (recipes,page=1, itemperpage=10) => {
    const start = (page -1) * itemperpage;
    const end = page * itemperpage;
    recipes.slice(start,end).forEach(renderrecipe);

    //render pagination buttons
    renderButtons(page, recipes.length,  itemperpage)
}

export const clearInput = () => elements.searchInput.value = '';

export const clearResult = () => {
    elements.searchResList.innerHTML = '';
    elements.searchResPages.innerHTML = '';
}

