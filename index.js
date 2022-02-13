// losowyLP can code js!?!??!?!?!?!!!?111?!!?11?
let val = 0

document.addEventListener("keydown", e => {
	switch (e.key.toLowerCase()) {
		case "1":
			window.open("https://beatsaver.com", "_top")
			break
		case "2":
			window.open("https://github.com", "_top")
			break
		case "3":
			window.open("https://mail.google.com", "_top")
			break
		case "4":
			window.open("https://drive.google.com", "_top")
			break
		case "5":
			window.open("https://youtube.com", "_top")
			break
		case "6":
			window.open("https://wakatime.com/dashboard", "_top")
			break
	}
})

document.addEventListener("wheel", e => {
	val = e.deltaY

	switch (e.deltaY) {
		case 100:
			document.body.style.background = "#141414"
			break
		case 200:
			document.body.style.background = "yellow"
			break
		case 300:
			document.body.style.background = "red"
			break
	}
})

