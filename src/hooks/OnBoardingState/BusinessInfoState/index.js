export default function BusinessInfoState() {
	let countryOfBirth = ''
	let employmentStatus = ''
	let occupation = ''
	let incomeSource = []
	let totalIncome = ''
	let accountUsage = ''
	let isUSCitizen = false
	let residencies = []
	let selectedCard = ''

	return {
		countryOfBirth,
		employmentStatus,
		occupation,
		incomeSource,
		totalIncome,
		accountUsage,
		isUSCitizen,
		residencies,
		selectedCard,
	}
}
