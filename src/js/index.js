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
