import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './styles'
import ActionButton from '../ActionButton'

export default function ListItemPlaceholder(props) {
	const { icon, title, subtitle, buttonTitle, onPress, style } = props
	return (
		<View style={[styles.container, style]}>
			<View>
				{icon && <Image source={icon} />}
				<Text style={[styles.text, styles.title]}>{title}</Text>
				<Text style={[styles.text, styles.subtitle]}>{subtitle}</Text>
			</View>
			{buttonTitle && (
				<ActionButton
					title={buttonTitle}
					style={styles.actionButton}
					onPress={() => onPress()}
				/>
			)}
		</View>
	)
}

ListItemPlaceholder.defaultProps = {
	onPress: () => {}
}
