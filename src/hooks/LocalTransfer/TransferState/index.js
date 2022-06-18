import { useState } from 'react'

export default function TransferState() {
	const [fromAccount, setFromAccount] = useState('')
	const [amount, setAmount] = useState('')
	const [purpose, setPurpose] = useState('')
	const [purposeDetails, setPurposeDetails] = useState('')
	const [isScheduleTransfer, setIsScheduleTransfer] = useState(false)

	return {
		fromAccount,
		setFromAccount,
		amount,
		setAmount,
		purpose,
		setPurpose,
		purposeDetails,
		setPurposeDetails,
		isScheduleTransfer,
		setIsScheduleTransfer
	}
}
