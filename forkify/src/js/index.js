// Global app controller
import  Search from './models/Search'
import * as searchView from './views/searchView'
import { elements } from './views/base'

//state 
const state ={};
//Search Controller here

const controllerSearch = async () => {
    //get input from view
    const query = searchView.getInput();

    if(query){
        //2 Search new object and add to state
        state.search = new Search(query);

        try{
            await state.search.getResults()

            //3.display the result to the UI
            searchView.clearInput();
            searchView.clearResult();
            searchView.renderResult(state.search.result)

        }catch(err){
            alert(err)
        }
    }

}

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controllerSearch();
})

elements.searchResPages.addEventListener('click', e => {
    console.log(e)
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResult();
        searchView.renderResult(state.search.result, goToPage);
    }
});