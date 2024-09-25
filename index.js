console.log('60/60');

const imgs = document.querySelectorAll('.img-container img');
const searchBar = document.querySelector('.search-bar');
const searchBarClearButton = document.querySelector('.search-bar-clear');
const searchBarSearchButton = document.querySelector('.search-bar-search');

searchBarClearButton.addEventListener('click', HandleClearSearch);
searchBarSearchButton.addEventListener('click', HandleSearch);

searchBar.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        HandleSearch();
    }
});

window.onload = searchBar.focus();

let picts = displayPicts(`https://api.unsplash.com/photos/random?count=${imgs.length}&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`);

for(let i = 0; i < imgs.length; i++){
    imgs[i].addEventListener('click', function(){
        console.log(i);
    });
}

async function displayPicts(url) {
    const response = await fetch(url);
    const picts = await response.json();
    console.log(response);
    console.log(picts);
    for(let i = 0; i < imgs.length; i++){
        imgs[i].src = picts[i].urls.regular;
    }
}

function HandleSearch(){
    for(let i = 0; i < imgs.length; i++){
        imgs[i].src = "assets/imgs/empty-card.png";
    }
    displayPicts(`https://api.unsplash.com/photos/random?count=${imgs.length}&query=${searchBar.value}&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`);
}
function HandleClearSearch(){
    searchBar.value = '';
}