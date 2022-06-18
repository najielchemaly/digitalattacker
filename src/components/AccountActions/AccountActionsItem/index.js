import React from 'react'
import { TouchableOpacity, Image, Text } from 'react-native'

import styles from './styles'

export default function AccountActionsItem(props) {
	const { image, imageStyle, title, titleStyle, onPress } = props

	return (
		<TouchableOpacity
			style={styles.container}
			activeOpacity={0.8}
			onPress={onPress}
		>
			<Image style={[styles.icon, imageStyle]} source={image} />
			<Text style={[styles.title, titleStyle]}>{title}</Text>
		</TouchableOpacity>
	)
}
