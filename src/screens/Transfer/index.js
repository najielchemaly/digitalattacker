import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

import {
	HeaderView,
	ActionButton,
	DropdownInput,
	TextInputWithBorder,
	KeyboardView,
	ContentScrollView,
	TransferToInput,
	DateOfTransferView,
	AmountTextInput
} from '../../components'
import { backArrow } from '../../assets/images'
import styles from './styles'
import { appStyles, screenName, strings } from '../../constants'
import { TransferState } from '../../hooks'

export default function Transfer(props) {
	const { navigation } = props
	const { navigate, goBack } = navigation
	const { beneficiary, accountBalance } = navigation.state.params

	const [buttonDisabled, setButtonDisabled] = useState(true)
	const transferInputState = TransferState()
	const purposes = ['Personal']

	function validateUserInputs() {
		const { amount, purpose } = transferInputState
		const isValid = amount !== '' && purpose !== ''
		setButtonDisabled(!isValid)
	}

	useEffect(() => {
		validateUserInputs()

		transferInputState.setFromAccount(beneficiary.beneficiaryIban)
	}, [transferInputState])

	return (
		<View style={styles.container}>
			<HeaderView
				leftIcon={backArrow}
				title={strings.transfer}
				onLeftPress={() => goBack(screenName.beneficiaryList)}
			/>
			<KeyboardView style={styles.contentView}>
				<ContentScrollView style={styles.scrollView}>
					<Text style={styles.accountBalance}>
						{strings.currentAccountBalance} {accountBalance}{' '}
						{strings.localCurrency}
					</Text>
					<TransferToInput
						title={strings.transferTo}
						value={beneficiary.beneficiaryName}
					/>
					<AmountTextInput
						onChangeText={text => transferInputState.setAmount(text)}
						value={transferInputState.amount}
						style={appStyles.fieldContainer}
						title={`${strings.amount} (${strings.localCurrency})`}
					/>
					<DropdownInput
						onValueChange={text => transferInputState.setPurpose(text)}
						value={transferInputState.purpose}
						style={appStyles.fieldContainer}
						title={strings.purpose}
						items={purposes}
					/>
					<TextInputWithBorder
						onChangeText={text => transferInputState.setPurposeDetails(text)}
						style={appStyles.fieldContainer}
						value={transferInputState.purposeDetails}
						title={strings.purposeDetails}
						optional
					/>
					<DateOfTransferView
						style={appStyles.fieldContainer}
						navigation={navigation}
					/>
				</ContentScrollView>
				<ActionButton
					disabled={buttonDisabled}
					style={styles.actionButton}
					title={strings.continue}
					onPress={() => navigate(screenName.transferSummary, { beneficiary })}
				/>
			</KeyboardView>
		</View>
	)
}
