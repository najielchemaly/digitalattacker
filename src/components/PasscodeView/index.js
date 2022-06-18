import React, { useState } from 'react'
import { View, Image, TouchableOpacity, Keyboard, Text } from 'react-native'

import styles from './styles'
import Passcode from './Passcode'
import { showEye, hideEye } from '../../assets/images'

export default function PasscodeView(props) {
	const { codeLength, onFulfill, style, passcode } = props
	const [value, setValue] = useState('')
	const [isSecure, setIsSecure] = useState(true)
	const [isValid, setIsValid] = useState(true)

	function validatePasscode(code) {
		if (passcode === undefined) return true
		return code === passcode
	}

	function handleOnFulfill(code) {
		const valid = validatePasscode(code)
		setIsValid(valid)
		setValue('')

		valid && onFulfill(code)
	}

	function handleOnTextChange(code) {
		setValue(code)
		setIsValid(true)
	}

	return (
		<View style={styles.container}>
			<View style={[styles.contentView, style]}>
				<Passcode
					value={value || props.value}
					codeLength={codeLength}
					onTextChange={code => handleOnTextChange(code)}
					password={isSecure}
					mask={<View style={styles.maskView} />}
					onFulfill={code => handleOnFulfill(code)}
					cellStyleFilled={styles.cellStyleFilled}
				/>
				<TouchableOpacity
					activeOpacity={0.8}
					onPress={() => setIsSecure(!isSecure)}
				>
					<Image
						style={styles.icon}
						resizeMode={'center'}
						source={isSecure ? showEye : hideEye}
					/>
				</TouchableOpacity>
			</View>
			{!isValid && (
				<Text style={styles.labelError}>Passcodes do not match</Text>
			)}
		</View>
	)
}

PasscodeView.defaultProps = {
	onFulfill: () => {}
}
