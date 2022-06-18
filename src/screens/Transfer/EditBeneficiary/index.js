import React, { useState, useEffect } from 'react'
import { View } from 'react-native'

import {
	HeaderView,
	ActionButton,
	TextButton,
	KeyboardView
} from '../../../components'
import { backArrow } from '../../../assets/images'
import styles from './styles'
import { BeneficiaryState, LocalTransferUserInput } from '../../../hooks'
import { strings } from '../../../constants'

export default function EditBeneficiary(props) {
	const { navigation } = props
	const { goBack } = navigation
	const [buttonDisabled, setButtonDisabled] = useState(true)
	const beneficiaryState = BeneficiaryState()

	function validateUserInputs() {
		const {
			type,
			iban,
			beneficiaryName,
			beneficiaryNickname
		} = beneficiaryState
		const isValid = type !== '' && iban !== '' && beneficiaryNickname !== ''
		setButtonDisabled(!isValid)
	}

	useEffect(() => {
		validateUserInputs()
	}, [beneficiaryState])

	return (
		<View style={styles.container}>
			<HeaderView
				leftIcon={backArrow}
				onLeftPress={() => goBack()}
				title={strings.editBeneficiary}
			/>
			<KeyboardView style={styles.contentView}>
				<LocalTransferUserInput state={beneficiaryState} />
				<ActionButton
					disabled={buttonDisabled}
					style={styles.saveButton}
					title={strings.saveChanges}
					onPress={() => goBack()}
				/>
				<TextButton
					style={styles.cancelButton}
					title={strings.cancel}
					onPress={() => goBack()}
				/>
			</KeyboardView>
		</View>
	)
}
