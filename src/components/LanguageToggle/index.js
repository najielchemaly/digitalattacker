import React, { useState } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

import styles from './styles'
import { strings } from '../../constants'

export default function LanguageToggle(props) {
	const { style, onChangeValue } = props
	const [value, setValue] = useState(strings.english)

	function handleOnChangeValue() {
		switch (value) {
			case strings.english:
				setValue(strings.arabic)
				onChangeValue('ar')
				break
			default:
				setValue(strings.english)
				onChangeValue('en')
				break
		}
	}

	function getSwitchContainerStyle() {
		switch (value) {
			case strings.english:
				return { marginRight: '15%' }
			default:
				return { marginLeft: '15%' }
		}
	}

	return (
		<View style={[styles.container, style]}>
			<TouchableOpacity
				style={[styles.switchContainer, getSwitchContainerStyle()]}
				activeOpacity={0.8}
				onPress={handleOnChangeValue}
			>
				<Text style={styles.switchText}>{value}</Text>
			</TouchableOpacity>
		</View>
	)
}

LanguageToggle.defaultProps = {
	onChangeValue: value => {}
}
