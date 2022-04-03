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

document.addEventListener('DOMContentLoaded', main)
