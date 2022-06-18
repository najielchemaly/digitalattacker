import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import Pincode from 'react-native-smooth-pincode-input'

import { continueIcon } from '../../assets/images'

import styles from './styles'
import { appStyles, strings } from '../../constants'

export default function OTPView(props) {
	const { valid, onFulfill, onSubmit } = props
	const [pincode, setPincode] = useState('')
	const [continueDisabled, setContinueDisabled] = useState(true)

	function handleOnFulfill(code) {
		setContinueDisabled(false)
		onFulfill(code)
	}

	function handleOnTextChange(code) {
		setContinueDisabled(true)
		setPincode(code)
	}

	function handleOnSubmitPress() {
		setContinueDisabled(true)
		onSubmit(pincode)
		setPincode('')
	}

	return (
		<View style={styles.container}>
			<View style={styles.pincodeContainer}>
				<Pincode
					{...props}
					cellStyle={[
						styles.cell,
						!valid && pincode === '' && styles.cellError
					]}
					cellStyleFocused={styles.cellFocused}
					value={pincode}
					onFulfill={code => handleOnFulfill(code)}
					onTextChange={code => handleOnTextChange(code)}
					autoFocus
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
			{!valid && pincode === '' && (
				<Text style={styles.labelError}>{strings.incorrectOTP}</Text>
			)}
		</View>
	)
}

OTPView.defaultProps = {
	valid: true,
	cellSize: 35,
	cellSpacing: 15,
	codeLength: 6,
	onFulfill: code => {},
	onSubmit: code => {}
}
