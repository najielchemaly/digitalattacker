import React from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'

import styles from './styles'

export default function HeaderView(props) {
	const { leftIcon, onLeftPress, title, rightIcon, onRightPress, style } = props
	return (
		<View style={[styles.container, style]}>
			<TouchableOpacity
				disabled={leftIcon === null}
				activeOpacity={0.6}
				style={styles.leftItems}
				onPress={onLeftPress}
			>
				<Image source={leftIcon} />
			</TouchableOpacity>
			<Text style={styles.title}>{title}</Text>
			<TouchableOpacity
				disabled={rightIcon === null}
				activeOpacity={0.6}
				style={styles.rightItems}
				onPress={onRightPress}
			>
				<Image source={rightIcon} />
			</TouchableOpacity>
		</View>
	)
}
