import { useState } from 'react'

export default function BeneficiaryState() {
	const [type, setType] = useState('')
	const [iban, setIban] = useState('')
	const [beneficiaryName, setBeneficiaryName] = useState('')
	const [bankName, setBankName] = useState('')
	const [beneficiaryFirstName, setBeneficiaryFirstName] = useState('')
	const [beneficiaryMiddleName, setBeneficiaryMiddleName] = useState('')
	const [beneficiaryLastName, setBeneficiaryLastName] = useState('')
	const [beneficiaryNickname, setBeneficiaryNickname] = useState('')
	const [beneficiaryAddress, setBeneficiaryAddress] = useState('')

	return {
		type,
		setType,
		iban,
		setIban,
		beneficiaryName,
		setBeneficiaryName,
		bankName,
		setBankName,
		beneficiaryFirstName,
		setBeneficiaryFirstName,
		beneficiaryMiddleName,
		setBeneficiaryMiddleName,
		beneficiaryLastName,
		setBeneficiaryLastName,
		beneficiaryNickname,
		setBeneficiaryNickname,
		beneficiaryAddress,
		setBeneficiaryAddress
	}
}
