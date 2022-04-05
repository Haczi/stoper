


let startBtn
let pauseBtn
let stopBtn
let resetBtn
let historyBtn
let stopwatch
let time
let timeList
let closeModalBtn
let infoBtn
let modalShadow
let brush
let changeColor
let red
let blue
let green
let root

let seconds = 0
let minutes = 0
let countTime
let num = 1

const main = () => {
	prepareDOMElements()
	prepareDomEvents()
}

const prepareDOMElements = () => {
	startBtn = document.querySelector('.start')
	pauseBtn = document.querySelector('.pause')
	stopBtn = document.querySelector('.stop')
	resetBtn = document.querySelector('.reset')
	historyBtn = document.querySelector('.history')
	stopwatch = document.querySelector('.stopwatch')
	time = document.querySelector('.time')
	timeList = document.querySelector('.time-list')
	closeModalBtn = document.querySelector('.close')
	infoBtn = document.querySelector('.info')
	modalShadow = document.querySelector('.modal-shadow')
    brush =document.querySelector('.brush')
    changeColor = document.querySelector('.change-color')
	red = document.querySelector('.red')
	blue = document.querySelector('.blue')
	green = document.querySelector('.green')
	root = document.documentElement;
}

const prepareDomEvents = () => {
	pauseBtn.addEventListener('click', pauseStoper)
	startBtn.addEventListener('click', startSoper)
	stopBtn.addEventListener('click', stopStoper)
	resetBtn.addEventListener('click', resetStoper)
	historyBtn.addEventListener('click', showHistory)
	infoBtn.addEventListener('click', showModal)
	closeModalBtn.addEventListener('click', showModal)
	window.addEventListener('click', e => (e.target === modalShadow ? showModal() : false))
    brush.addEventListener('click', showPalet)
	red.addEventListener('click', () => {
		root.style.setProperty('--first-color', 'rgb(250, 20, 6)');
		root.style.setProperty('--hover-color', 'rgb(209, 33, 24)');
		hidePalet()
	});
	
	blue.addEventListener('click', () => {
		root.style.setProperty('--first-color', 'rgb(6, 173, 250)');
		root.style.setProperty('--hover-color', 'rgb(28, 145, 199)');
		hidePalet()
	});
	
	green.addEventListener('click', () => {
		root.style.setProperty('--first-color', 'rgb(0, 255, 42)');
		root.style.setProperty('--hover-color', 'rgb(28, 209, 58)');
		hidePalet()
	});
}

const startSoper = () => {
	timeList.style.display = 'none'
	clearInterval(countTime)
	countTime = setInterval(() => {
		if (seconds <= 9) {
			stopwatch.textContent = `${minutes}:0${seconds}`
			seconds++
		} else if (seconds >= 10 && seconds < 59) {
			stopwatch.textContent = `${minutes}:${seconds}`
			seconds++
		} else {
			stopwatch.textContent = `${minutes}:${seconds}`
			seconds = 0
			minutes++
		}
	}, 1000)
}
const stopStoper = () => {
	if (stopwatch.textContent !== '0:00') {
		time.textContent = stopwatch.textContent
		time.style.visibility = 'visible'
		const newTime = document.createElement('li')
		newTime.innerHTML = ` Pomiar nr ${num}:  <span>${time.textContent}</span>`
		timeList.append(newTime)
		num++
	}

	resetStopwatch()
}

const pauseStoper = () => {
	clearInterval(countTime)
   
}

const resetStoper = () => {
	let saveTime = []
	time.style.visibility = 'hidden'
	resetStopwatch()
	timeList.textContent = ''
	num = 1
}

const resetStopwatch = () => {
	clearInterval(countTime)
	stopwatch.textContent = '0:00'
	minutes = 0
	seconds = 0
}

const showHistory = () => {
	timeList.style.display = 'block'
}

const showModal = () => {
	if (!(modalShadow.style.display === 'block')) {
		modalShadow.style.display = 'block'
	} else {
		modalShadow.style.display = 'none'
	}
	modalShadow.classList.toggle('modal-animation')
}

const showPalet = () => {
    changeColor.classList.add('show-palet')
}

const hidePalet = () => {
	changeColor.classList.remove('show-palet')
}



document.addEventListener('DOMContentLoaded', main)
