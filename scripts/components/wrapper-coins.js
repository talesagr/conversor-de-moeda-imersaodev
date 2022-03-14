const $converter = document.querySelector('.converter');
let coin1 = 0;
let coin2 = 0;
let listCoin1 = "real";
let listCoin2 = "real";

const coins = {
    "coin-1": 0, 
    "coin-2": 0
}


$converter.addEventListener("input", (event) => {
const $origin = event.target;
const id = $origin.getAttribute("id");

coins[id] = $origin.value;


if ($origin.getAttribute("id") == 'list-coin-1') {
    listCoin1 = $origin.value
}

if ($origin.getAttribute("id") == 'list-coin-2') {
    listCoin2 = $origin.value
}
})