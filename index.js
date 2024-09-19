console.log(123);

const imgs = document.querySelectorAll('.img-container img');
const searchBar = document.querySelector('.search-bar');

async function getPicts(url) {
    const response = await fetch(url);
    const picts = await response.json();
    console.log(response);
    console.log(picts);
    for(let i = 0; i < 12; i++){
        imgs[i].src = picts[i].urls.regular;
    }
    //return picts;
}
let picts = getPicts("https://api.unsplash.com/photos/random?count=12&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo");
//console.log(picts);

function HandleSearch(){

}
function HandleClearSearch(){

}