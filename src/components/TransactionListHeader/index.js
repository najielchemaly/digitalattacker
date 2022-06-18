import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'
import { strings } from '../../constants'

export default function TransactionListHeader(props) {
	const { date, totalAmount } = props
	return (
		<View style={styles.container}>
			<Text style={styles.date}>{date}</Text>
			<Text style={styles.totalAmount}>
				{totalAmount} {strings.localCurrency}
			</Text>
		</View>
	)
}
