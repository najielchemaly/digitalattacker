import React from 'react'
import { Text, View } from 'react-native'

import styles from './styles'
import { appStyles } from '../../constants'

export default function SummaryItem(props) {
	const { label, value } = props

	return value ? (
		<View style={[styles.container, appStyles.separator]}>
			<Text style={styles.label}>{label}</Text>
			<Text style={styles.value}>{value}</Text>
		</View>
	) : null
}
