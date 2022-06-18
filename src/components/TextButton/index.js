import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import styles from './styles'
import { appStyles } from '../../constants'

export default function TextButton(props) {
	const { title, style, titleStyle, onPress, disabled, light } = props
	return (
		<TouchableOpacity
			disabled={disabled}
			activeOpacity={0.6}
			style={[styles.container, disabled && appStyles.disabled, style]}
			onPress={onPress}
		>
			<Text style={[styles.title, light && styles.lightTitle, titleStyle]}>
				{title}
			</Text>
		</TouchableOpacity>
	)
}
