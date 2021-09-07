// - Exercici 1
document.querySelector('#nextJoke').addEventListener('click', function () {
    fetch('http://icanhazdadjoke.com/', {
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(function (res) { return res.json(); })
        .then(function (res) { return console.log(res); });
});
// document.querySelector('#printJoke').innerHTML = '';
// document.querySelector('#nextJoke').addEventListener('click', async function nextJoke() {
//     const result = await fetch('https://icanhazdadjoke.com/');
//     const res = await result.json();
//     console.log(res);
// });
var numero = 5;
