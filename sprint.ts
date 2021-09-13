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

        document.querySelector('#peticion').innerHTML = 'Please rate the Joke'
    } else {
        if (position % 2 == 0) {
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
                    console.log('Next Joke list')
                    console.log(reportAcudits)

                })
        } else {
            correcto = false;
            fetch('https://api.chucknorris.io/jokes/random', {
                headers: {
                    'Accept': 'application/json',
                }
            })
                .then(res => {
                    return res.json();
                })
                .then(function (res) {
                    document.querySelector('#printJoke').innerHTML = `${res.value}`;
                    reportAcudits.push(
                        {
                            "joke": res.value,
                            "score": 0,
                            "date": date,
                        }
                    );

                    position += 1;
                    console.log('Next Joke list')
                    console.log(reportAcudits)

                })
        }

    }




})
document.querySelector('.score1').addEventListener('click', () => {
    if (reportAcudits[position].score != 1) {
        reportAcudits[position].score = 1;
        correcto = true;
        document.querySelector('#peticion').innerHTML = '';
        console.log(reportAcudits[position]);
    }
})

document.querySelector('.score2').addEventListener('click', () => {
    if (reportAcudits[position].score != 2) {
        reportAcudits[position].score = 2;
        correcto = true;
        document.querySelector('#peticion').innerHTML = '';
        console.log(reportAcudits[position])
    }
})

document.querySelector('.score3').addEventListener('click', () => {
    if (reportAcudits[position].score != 3) {
        reportAcudits[position].score = 3;
        correcto = true;
        document.querySelector('#peticion').innerHTML = '';
        console.log(reportAcudits[position])
    }
})


// console.log(reportAcudits);

//      Nivell 2 Exercici 4 i 5  *************************

fetch('https://api.openweathermap.org/data/2.5/onecall?lat=41.38&lon=2.16&exclude=hourly,daily&appid=972056032b2d7a22b30500165a06d9d9',)
    .then(res => {
        return res.json();
    })
    .then(function (res) {
        var celsius: number | string = ((res.current.temp) - 273.15);
        celsius = celsius.toString();
        celsius = celsius.slice(0, 4);
        celsius = parseInt(celsius);
        var mainWeather: string = (res.current.weather[0].description);
        mainWeather = mainWeather.charAt(0).toUpperCase() + mainWeather.slice(1);
        document.querySelector('#forecast').innerHTML = `${mainWeather} <br> ${celsius}º`;
        console.log(mainWeather)
    })







