import React from 'react'
import { View, Image, Text } from 'react-native'

import styles from './styles'

export default function QualifyingStep(props) {
	const { image, title, style } = props

	return (
		<View style={[styles.container, style]}>
			<Image style={styles.image} source={image} />
			<Text style={styles.title}>{title}</Text>
		</View>
	)
}
