// - Exercici 1 i 2
var reportAcudits = [];
var position: number = -1;
var correcto: boolean = false;
var date = new Date();
date.toISOString();

// interface IreportAcudits {
//     joke: string;
//     score: number;
//     date: Date;
// }

document.querySelector('#nextJoke').addEventListener('click', () => {
    if (correcto == false && position >= 0) {
        document.querySelector('#peticion').innerHTML = 'PLease rate the Joke'
    } else {
        correcto = false;
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
                reportAcudits.push(
                    {
                        "joke": res.joke,
                        "score": 0,
                        "date": date,
                    }
                );

                position += 1;
                console.log(reportAcudits)
                console.log(position)
            });

    }

    document.querySelector('.score1').addEventListener('click', () => {
        reportAcudits[position].score = 1;
        correcto = true;
        console.log(reportAcudits[position])
    })

    document.querySelector('.score2').addEventListener('click', () => {
        reportAcudits[position].score = 2;
        correcto = true;
        console.log(reportAcudits[position])
    })

    document.querySelector('.score3').addEventListener('click', () => {
        reportAcudits[position].score = 3;
        correcto = true;
        console.log(reportAcudits[position])
    })


})


console.log(reportAcudits);








