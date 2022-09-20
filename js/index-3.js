var price = 20;

document.querySelector('#plus').onclick = () => {
    console.log("click")
    price = price + 20;
    document.querySelector('.price').innerHTML = price;
}

document.querySelector('#minus').addEventListener('click', () => {
    if (price > 20) {
        price = price - 20;
    }
    document.querySelector('.price').innerHTML = price;
})