import React from 'react'
import { TouchableOpacity, View } from 'react-native'

import styles from './styles'

export default function CardView(props) {
	const { style, onPress } = props

	return (
		<TouchableOpacity
			style={[styles.container, style]}
			activeOpacity={0.8}
			onPress={onPress}
		>
			<View></View>
		</TouchableOpacity>
	)
}
