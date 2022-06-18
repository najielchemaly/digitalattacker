import React from 'react'
import { View, Text, Image } from 'react-native'

import { appStyles } from '../../constants'
import styles from './styles'

export default function TransferToInput(props) {
	const { image, title, value, style } = props

	function getBeneficiaryShortName() {
		if (value) {
			const values = value.toUpperCase().split(' ')
			const firstChar = values[0].charAt(0)
			if (values.length === 1) {
				return firstChar
			}
			const lastChar = values[values.length - 1].charAt(0)
			return `${firstChar.trim()} ${lastChar.trim()}`
		}
		return value
	}

	return (
		<View style={[styles.container, style]}>
			<Text style={styles.title}>{title}</Text>
			<View style={[styles.contentView, appStyles.fieldBox]}>
				{image && <Image style={styles.image} source={image} />}
				{!image && (
					<View style={styles.imagePlaceholder}>
						<Text style={styles.imageTitle}>{getBeneficiaryShortName()}</Text>
					</View>
				)}
				<Text style={styles.value}>{value}</Text>
			</View>
		</View>
	)
}
