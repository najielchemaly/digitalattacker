import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'

import { continueIcon } from '../../assets/images'

import styles from './styles'
import { appStyles, strings } from '../../constants'
import { validateText } from '../../constants/functions'

export default function PhoneNumberView(props) {
	const { valid, onSubmit, style, maxLength, regex, autoFocus } = props
	const [value, setValue] = useState('')
	const [continueDisabled, setContinueDisabled] = useState(true)
	const [textInput, setTextInput] = useState()
	const phoneCode = '+966' // TODO

	function handleOnTextChange(text) {
		const number = text.replace(/[^0-9]/g, '')
		const phone = `${phoneCode} ${number}`
		const isValid = validateText(phone, regex)
		setContinueDisabled(!isValid || number.length !== maxLength)
		setValue(number)
	}

	function handleOnSubmitPress() {
		onSubmit(`${phoneCode} ${value}`)
	}

	if (textInput && autoFocus) {
		textInput.focus()
	}

	return (
		<View>
			<View style={[styles.container, !valid && styles.containerError, style]}>
				<Text style={styles.text}>{phoneCode}</Text>
				<TextInput
					{...props}
					value={value || props.value}
					style={[styles.textInput, styles.text]}
					onChangeText={text => handleOnTextChange(text)}
					onSubmitEditing={() => !continueDisabled && handleOnSubmitPress()}
					ref={ref => setTextInput(ref)}
				/>
				<TouchableOpacity
					onPress={() => handleOnSubmitPress()}
					style={continueDisabled && appStyles.disabled}
					disabled={continueDisabled}
					activeOpacity={0.8}
				>
					<Image style={styles.continue} source={continueIcon} />
				</TouchableOpacity>
			</View>
			{!valid && <Text style={styles.labelError}>{strings.incorrectOTP}</Text>}
		</View>
	)
}

PhoneNumberView.defaultProps = {
	valid: true,
	autoFocus: false,
	maxLength: 9,
	onSubmit: text => {},
	keyboardType: 'phone-pad',
	blurOnSubmit: false,
	regex: null
}
