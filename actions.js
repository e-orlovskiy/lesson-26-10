function sum(age, height) {
	if (!age || !height) return 'Недостаточно данных'
	if (typeof age !== 'number') return 'age неправильного формата'
	if (typeof height !== 'number') return 'height неправильного формата'

	return age + height
}

function pow(age, height, result) {
	return {
		newAge: age ** 2,
		newHeight: height ** 2,
		newResult: result ** 2
	}
}

export { pow, sum }
