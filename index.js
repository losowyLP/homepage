//#region typewriter
var i = 0
var txt = 'Welcome.'
var speed = 70

function typeWriter() {
	if (i < txt.length) {
		document.getElementById('tw').innerText += txt.charAt(i)
		i++
		setTimeout(typeWriter, speed)
	}
}

typeWriter()
//#endregion

//#region weather data
key = 'e6e4525b8870b3f08c362da4c1d63f32'
city = 'sandnes'

function getWeatherData() {
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`)
		.then((res) => res.json())
		.then((data) => {
			document.getElementById(
				'weather'
			).innerText = `${data.weather[0].main}, ${data.main.temp}°C`
		})
	
	setTimeout(geatWeatherData, 10000)
}
getWeatherData()
//#endregion

//#region clock
function clock() {
	const date = new Date()

	document.getElementById('time').innerText = date.toLocaleTimeString()
}

setInterval(clock, 100)
//#endregion

//#region date
const date = new Date()

const day = date.getDate()
const year = date.getFullYear()
const month = date.getMonth()

document.getElementById('date').innerText = `${day}/${month}/${year}`
//#endregion

//#region keyboard shortcuts
document.addEventListener('keydown', (e) => {
	switch (e.key.toLowerCase()) {
		case '1':
			window.open('https://beatsaver.com', '_top')
			break
		case '2':
			window.open('https://github.com', '_top')
			break
		case '3':
			window.open('https://mail.google.com', '_top')
			break
		case '4':
			window.open('https://drive.google.com', '_top')
			break
		case '5':
			window.open('https://youtube.com', '_top')
			break
		case '6':
			window.open('https://wakatime.com/dashboard', '_top')
			break
	}
})
//#endregion
