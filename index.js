var i = 0
var txt = 'Welcome' /* The text */
var speed = 50 /* The speed/duration of the effect in milliseconds */

if (i < txt.length) {
	document.getElementById('tw').innerHTML += txt.charAt(i)
	i++
	setTimeout(typeWriter, speed)
}

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
