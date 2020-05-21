import Search from './models/Search';

const state = {};
const search = new Search('pizza');
console.log(search);
search.getResults();
document.querySelector('.btn search__btn').addEventListener('submit', e => {
    e.preventDefault();
    getInput();
});
document.addEventListener('keypress', (event) => {
    if (event.keyCode === 13 || event.which === 13)
        getInput();
});
const getInput = () => {
    // Get new query
    const query = 'pizza';//TODO
    //Add new search object to state
    if (query) {
        state.search = new Search(query);
        //Prepare UI for results
        
    }

};