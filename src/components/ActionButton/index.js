import React from 'react'
import { TouchableOpacity, Text, Image } from 'react-native'

import styles from './styles'
import { appStyles } from '../../constants'
import { backArrow } from '../../assets/images'

export default function ActionButton(props) {
	const { title, titleStyle, style, onPress, disabled, light, icon } = props
	return (
		<TouchableOpacity
			disabled={disabled}
			activeOpacity={0.6}
			style={[
				styles.container,
				light && styles.lightContainer,
				disabled && appStyles.disabled,
				style
			]}
			onPress={() => onPress()}
		>
			<Text style={[styles.title, light && styles.lightTitle, titleStyle]}>
				{title}
			</Text>
			{icon && <Image style={styles.icon} source={backArrow} />}
		</TouchableOpacity>
	)
}
