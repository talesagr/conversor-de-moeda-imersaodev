const $wrapper1 = document.querySelector('#wrapper-1');
const $otherCoin1 = document.querySelector("#wrapper-2 > .coin")
const sek = 0.5;
const wrapper1 = {
coin: 0,
"list-coins": "real",
}


$wrapper1.addEventListener('input', (event) => {
const $origin = event.target;
const value = $origin.value;
const ref = $origin.getAttribute("data-ref");

wrapper1[ref] = value;

$otherCoin1.value = value * sek;
})