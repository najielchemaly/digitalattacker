import {
	employeeIcon,
	businessOwnerIcon,
	studentIcon,
	retiredIcon,
	notWorkingIcon,
	businessEarningIcon,
	rentalHomeIcon,
	investmentIcon,
	somethingElseIcon
} from '../assets/images'
import { strings } from '.'

function getBeneficiaryList() {
	return [
		{
			title: strings.recent,
			data: [
				{
					beneficiaryName: 'Mum account',
					beneficiaryIban: 'SA 01 23 345678903323'
				},
				{
					beneficiaryName: 'Myan Hossein',
					beneficiaryIban: 'SA 01 23 345678903323'
				},
				{
					beneficiaryName: 'Saziqa Salah',
					beneficiaryIban: 'SA 01 23 345678903323'
				}
			]
		},
		{
			title: strings.allBeneficiaries,
			data: [
				{
					beneficiaryName: 'Abdul Hossein',
					beneficiaryIban: 'SA 01 23 345678903323'
				},
				{
					beneficiaryName: 'Basim Gamali',
					beneficiaryIban: 'SA 01 23 345678903323'
				},
				{
					beneficiaryName: 'Jawad Gadaff',
					beneficiaryIban: 'SA 01 23 345678903323'
				}
			]
		}
	]
}

function getTranscationList() {
	return [
		{
			title: {
				date: 'Monday February 3, 2020',
				totalAmount: '-326.51'
			},
			data: [
				{
					title: 'Mobily',
					amount: '-50.25'
				},
				{
					title: 'Transfer In - Sama Al Hanin',
					amount: '+24.00'
				},
				{
					title: 'Saudi Electric Company',
					amount: '-300.27'
				}
			]
		},
		{
			title: {
				date: 'Sunday February 2, 2020',
				totalAmount: '-228.42'
			},
			data: [
				{
					title: 'Transfer Out - Mohamad Saad',
					amount: '-66.15'
				},
				{
					title: 'Branch Deposit',
					amount: '+45.00'
				},
				{
					title: 'STC',
					amount: '-207.27'
				}
			]
		}
	]
}

function getAppIntroList() {
	return [
		{
			key: Math.random().toString(),
			title: 'Your future starts here',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at malesuada massa.',
			image: null
		},
		{
			key: Math.random().toString(),
			title: 'Make your goals reality',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at malesuada massa.',
			image: null
		},
		{
			key: Math.random().toString(),
			title: 'A service designed for you',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at malesuada massa.',
			image: null
		}
	]
}

// DUMMY DATA

function getQualifyingPointsList() {
	return [
		{
			title: strings.qualifyingPoint1
		},
		{
			title: strings.qualifyingPoint2,
			info: strings.qualifyingPoint2Desc,
			expandable: true
		},
		{
			title: strings.qualifyingPoint3,
			info: strings.qualifyingPoint3Desc,
			expandable: true
		}
	]
}

function getEmploymentList() {
	return [
		{
			image: employeeIcon,
			title: `I'm an employee`,
			seletec: false
		},
		{
			image: businessOwnerIcon,
			title: `I'm a business owner`,
			seletec: false
		},
		{
			image: studentIcon,
			title: `I'm a student`,
			seletec: false
		},
		{
			image: retiredIcon,
			title: `I'm retired`,
			seletec: false
		},
		{
			image: notWorkingIcon,
			title: `I'm not working as of this moment`,
			seletec: false
		}
	]
}

function getIncomeSourceList() {
	return [
		{
			image: employeeIcon,
			title: strings.salaryWithAllowances,
			seletec: false
		},
		{
			image: businessEarningIcon,
			title: strings.businessEarnings,
			seletec: false
		},
		{
			image: rentalHomeIcon,
			title: strings.rentalIncome,
			seletec: false
		},
		{
			image: investmentIcon,
			title: strings.investmentProducts,
			seletec: false
		},
		{
			image: somethingElseIcon,
			title: strings.somethingElse,
			seletec: false
		}
	]
}

function getTotalIncomeList() {
	return [
		{
			title: '0 - 4,999',
			seletec: false
		},
		{
			title: '5,000 - 9,999',
			seletec: false
		},
		{
			title: '10,000 - 19,999',
			seletec: false
		},
		{
			title: '20,000 - 44,999',
			seletec: false
		},
		{
			title: '45,000 or more',
			seletec: false
		}
	]
}

function getAccountUseList() {
	return [
		{
			image: employeeIcon,
			title: strings.mySalary,
			seletec: false
		},
		{
			image: investmentIcon,
			title: strings.mySavings,
			seletec: false
		},
		{
			image: notWorkingIcon,
			title: strings.governmentWelfare,
			seletec: false
		}
	]
}

export {
	getBeneficiaryList,
	getTranscationList,
	getAppIntroList,
	getQualifyingPointsList,
	getEmploymentList,
	getIncomeSourceList,
	getTotalIncomeList,
	getAccountUseList
}
