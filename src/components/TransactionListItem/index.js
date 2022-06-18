import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from './styles'
import { transactionUpIcon, transactionDownIcon } from '../../assets/images'

export default function TransactionListHeader(props) {
	const { title, amount, onPress } = props

	function getTransactionIcon() {
		try {
			const number = Number(amount)
			return number > 0 ? transactionUpIcon : transactionDownIcon
		} catch {
			return null
		}
	}

	return (
		<TouchableOpacity
			style={styles.container}
			activeOpacity={0.8}
			onPress={onPress}
		>
			<View style={styles.titleContainer}>
				<Image style={styles.icon} source={getTransactionIcon()} />
				<Text style={styles.title}>{title}</Text>
			</View>
			<Text style={styles.amount}>{amount}</Text>
		</TouchableOpacity>
	)
}
