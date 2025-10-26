import { pow as powFunction, sum } from './actions.js'
import { DEFAULT_HEIGHT } from './contants.js'

const age = document.querySelector('.age')
const height = document.querySelector('.height')
const sumBtn = document.querySelector('.sumBtn')
const powBtn = document.querySelector('.powBtn')
const result = document.querySelector('.result')

document.addEventListener('DOMContentLoaded', e => {
	height.value = DEFAULT_HEIGHT
	let a = 5
})

sumBtn.addEventListener('click', e => {
	e.preventDefault()
	result.value = sum(+age.value, +height.value)
})

powBtn.addEventListener('click', e => {
	e.preventDefault()
	let { newAge, newHeight, newResult } = powFunction(
		+age.value,
		+height.value,
		+result.value
	)
	age.value = newAge
	height.value = newHeight
	result.value = newResult
})
