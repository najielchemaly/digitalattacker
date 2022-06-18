import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'
import { appStyles } from '../../constants'

export default function ListItem(props) {
	const { label, value, style } = props
	return (
		<View style={[styles.container, appStyles.separator, style]}>
			<Text style={styles.label}>{label}</Text>
			<Text style={styles.value}>{value}</Text>
		</View>
	)
}
