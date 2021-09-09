// - Exercici 1 i 2
var reportAcudits: object = [];
var position: number = -1;
var correcto: boolean = false;

if (correcto == true) {
    document.querySelector('#nextJoke').addEventListener('click', () => {
        fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json',
            }
        })
            .then(res => {
                return res.json();
            })
            .then(function (res) {
                document.querySelector('#printJoke').innerHTML = `${res.joke}`;
                reportAcudits = [
                    {
                        joke: res.joke,
                        score: 0,
                        date: Date,
                    }
                ]
                position += 1;
                correcto = false;
            });
    })
} else {
    document.querySelector('#peticion').innerHTML = 'Please rate the Joke'
}

document.querySelector('.score1').addEventListener('click', () => {
    reportAcudits[position].score = 1;
    correcto = true;
})

document.querySelector('.score2').addEventListener('click', () => {
    var score: number = 2;
    reportAcudits[position].score = 2;
    correcto = true;
})

document.querySelector('.score3').addEventListener('click', () => {
    var score: number = 3;
    reportAcudits[position].score = 3;
    correcto = true;
})







