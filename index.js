key = 'e6e4525b8870b3f08c362da4c1d63f32'
city = 'sandnes'

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`)
	.then((res) => res.json())
	.then((data) => {
		console.log(data)
		document.getElementById('weather').innerText = `${data.weather[0].main}`
	})

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
