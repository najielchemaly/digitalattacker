import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'

import { appStyles, strings, colors } from '../../constants'
import styles from './styles'

export default function AmountTextInput(props) {
	const {
		title,
		style,
		onChangeText,
		errorMessage,
		disabled,
		placeholder,
		value
	} = props

	const [isValid, setIsValid] = useState(true)
	const [transFee, setTransFee] = useState('')
	const [transVAT, setTransVAT] = useState('')
	const [transTotalAmount, setTransTotalAmount] = useState('')
	const [showDetails, setShowDetails] = useState(false)

	function handleOnChangeText(text) {
		setIsValid(text !== '')

		const amount = Number(text.replace(/,/g, ''))
		const fee = (amount * 0.02).toFixed(2)
		setTransFee(fee)

		const vat = (amount * 0.05).toFixed(2)
		setTransVAT(vat)

		const totalAmount = amount + amount * 0.02 + amount * 0.05
		setTransTotalAmount(totalAmount.toFixed(2))

		setShowDetails(amount > 0)

		onChangeText(amount.toLocaleString())
	}

	function renderDetailsView() {
		return (
			<View style={styles.detailView}>
				<View style={styles.rowItem}>
					<Text style={styles.label}>{strings.transactionFee}:</Text>
					<Text style={styles.value}>
						{transFee} {strings.localCurrency}
					</Text>
				</View>
				<View style={styles.rowItemWithMargin}>
					<Text style={styles.label}>{strings.vatPercentage}:</Text>
					<Text style={styles.value}>
						{transVAT} {strings.localCurrency}
					</Text>
				</View>
				<View style={styles.rowItem}>
					<Text style={styles.label}>{strings.totalAmountDesc}:</Text>
					<Text style={styles.value}>
						{transTotalAmount} {strings.localCurrency}
					</Text>
				</View>
			</View>
		)
	}

	return (
		<View
			pointerEvents={disabled && 'none'}
			style={[styles.container, disabled && appStyles.disabled, style]}
		>
			<Text style={[styles.title, !isValid && appStyles.error]}>{title}</Text>
			<View style={[styles.contentView, !isValid && appStyles.error]}>
				<TextInput
					{...props}
					value={value}
					style={styles.textInput}
					placeholder={placeholder}
					onChangeText={text => handleOnChangeText(text)}
					// onEndEditing={() => setShowDetails(value !== '')}
				/>
				{showDetails && renderDetailsView()}
			</View>
			{!isValid && <Text style={[appStyles.errorLabel]}>{errorMessage}</Text>}
		</View>
	)
}

AmountTextInput.defaultProps = {
	onChangeText: text => {},
	keyboardType: 'numeric',
	value: '0'
}
