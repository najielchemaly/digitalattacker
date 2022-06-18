import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'

import styles from './styles'
import ActionButton from '../ActionButton'
import { strings } from '../../constants'

export default function AccountInfoCard(props) {
	const { label, balance, currency, onPress, style } = props

	return (
		<TouchableOpacity
			disabled
			style={[styles.container, style]}
			activeOpacity={0.8}
		>
			<Text style={styles.label}>{label}</Text>
			<View style={styles.balanceContainer}>
				<Text style={styles.balance}>{balance}</Text>
				<Text style={styles.currency}>{currency}</Text>
			</View>
			<ActionButton
				style={styles.actionButton}
				title={strings.details}
				onPress={onPress}
				light
			/>
		</TouchableOpacity>
	)
}
