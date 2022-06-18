import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'

import styles from './styles'

export default function AccountHeaderInfo(props) {
	const { label, balance, currency, onPress } = props

	return (
		<TouchableOpacity
			style={styles.container}
			activeOpacity={0.8}
			onPress={onPress}
		>
			<Text style={styles.label}>{label}</Text>
			<View style={styles.balanceContainer}>
				<Text style={styles.balance}>{balance}</Text>
				<Text style={styles.currency}>{currency}</Text>
			</View>
		</TouchableOpacity>
	)
}
