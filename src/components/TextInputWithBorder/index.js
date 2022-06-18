import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'

import { appStyles, strings } from '../../constants'
import styles from './styles'

export default function TextInputWithBorder(props) {
	const {
		title,
		style,
		onChangeText,
		errorMessage,
		optional,
		disabled,
		placeholder,
		value,
		isAmount
	} = props

	const [isValid, setIsValid] = useState(true)

	function handleOnChangeText(text) {
		setIsValid(text !== '')

		if (isAmount) {
			const amount = Number(text.replace(/,/g, ''))
			onChangeText(amount.toLocaleString())
		} else {
			onChangeText(text)
		}
	}

	function handleOnEndEditing() {}

	return (
		<View
			pointerEvents={disabled && 'none'}
			style={[styles.container, disabled && appStyles.disabled, style]}
		>
			<Text style={[styles.title, !isValid && appStyles.error]}>
				{title}
				{optional && strings.optional}
			</Text>
			<View
				style={[
					styles.touchableContainer,
					appStyles.fieldBox,
					!isValid && appStyles.error
				]}
			>
				<TextInput
					{...props}
					value={value}
					style={styles.textInput}
					placeholder={placeholder}
					onChangeText={text => handleOnChangeText(text)}
					onEndEditing={handleOnEndEditing}
				/>
			</View>
			{!isValid && <Text style={[appStyles.errorLabel]}>{errorMessage}</Text>}
		</View>
	)
}

TextInputWithBorder.defaultProps = {
	onChangeText: text => {},
	returnKeyType: 'next'
}
