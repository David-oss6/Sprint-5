// - Exercici 1
document.querySelector('#nextJoke').addEventListener('click', () => {
    fetch('http://icanhazdadjoke.com/', {
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then(res => res.json())
        .then(res => console.log(res))


});
// document.querySelector('#printJoke').innerHTML = '';


// document.querySelector('#nextJoke').addEventListener('click', async function nextJoke() {
//     const result = await fetch('https://icanhazdadjoke.com/');
//     const res = await result.json();
//     console.log(res);
// });
let numero: number = 5;
