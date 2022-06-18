import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'

import styles from './styles'
import { appStyles, strings } from '../../constants'
import { validateText } from '../../constants/functions'
import { continueIcon } from '../../assets/images'

export default function TextInputWithButton(props) {
	const { valid, onSubmit, style, minLength, autoFocus, regex } = props
	const [value, setValue] = useState('')
	const [continueDisabled, setContinueDisabled] = useState(true)
	const [textInput, setTextInput] = useState()

	function handleOnTextChange(text) {
		const isValid = validateText(text, regex)
		setContinueDisabled(!isValid || text.length < minLength)
		setValue(text)
	}

	function handleOnSubmitPress() {
		onSubmit(value)
		setContinueDisabled(true)
	}

	if (textInput && autoFocus) {
		textInput.focus()
	}

	return (
		<View>
			<View style={[styles.container, !valid && styles.containerError, style]}>
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

TextInputWithButton.defaultProps = {
	valid: true,
	autoFocus: true,
	onSubmit: text => {},
	returnKeyType: 'next',
	blurOnSubmit: false,
	autoCapitalize: 'words',
	autoCorrect: false,
	regex: null
}
