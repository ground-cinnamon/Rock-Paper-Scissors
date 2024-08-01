import './style.css'

const app = document.querySelector('#app')

// R + P = lose
// R + S = win
// R + R = draw

const rulesMap = {
	r: {
		r: 'draw',
		s: 'win',
		p: 'lose',
		erast: 'lose',
	},
	p: {
		p: 'draw',
		s: 'lose',
		r: 'win',
		erast: 'lose',
	},
	s: {
		s: 'draw',
		p: 'win',
		r: 'lose',
		erast: 'lose',
	},
	erast: {
		s: 'win',
		p: 'win',
		r: 'win',
		erast: 'draw',
	},
}

function computerChoice() {
	let choices = Object.keys(rulesMap)
	const index = Math.round(Math.random() * (choices.length - 1))
	console.log(index)
	return choices[index]
}

function checkWin(myChoice, computerChoice) {
	let result = rulesMap[myChoice][computerChoice]
	return result
}

const computerChoiceElement = document.createElement('p')

const result = document.createElement('h1')
result.textContent = "let's play"
app.append(computerChoiceElement, result)

const scissorsButton = document.createElement('button')
const rockButton = document.createElement('button')
const paperButton = document.createElement('button')
const erastButton = document.createElement('button')
scissorsButton.textContent = '✂️'
rockButton.textContent = '🗿'
paperButton.textContent = '📄'
erastButton.textContent = 'DEATH'
app.append(scissorsButton, rockButton, paperButton, erastButton)

scissorsButton.addEventListener('click', () => {
	const myChoice = 's'
	const compChoice = computerChoice()

	result.textContent = checkWin(myChoice, compChoice)
	computerChoiceElement.textContent = compChoice
})

rockButton.addEventListener('click', () => {
	const myChoice = 'r'
	const compChoice = computerChoice()

	result.textContent = checkWin(myChoice, compChoice)
	computerChoiceElement.textContent = compChoice
})

paperButton.addEventListener('click', () => {
	const myChoice = 'p'
	const compChoice = computerChoice()

	result.textContent = checkWin(myChoice, compChoice)
	computerChoiceElement.textContent = compChoice
})

erastButton.addEventListener('click', () => {
	const myChoice = 'erast'
	const compChoice = computerChoice()

	result.textContent = checkWin(myChoice, compChoice)
	computerChoiceElement.textContent = compChoice
})
