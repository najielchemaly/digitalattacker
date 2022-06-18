import React from 'react'
import { View, Image, Text, StatusBar } from 'react-native'

import { successIcon, failureIcon } from '../../assets/images'
import { ActionButton, TextButton } from '../../components'
import styles from './styles'

export default function ActionStatus(props) {
	const { navigation } = props
	const {
		message,
		isSuccess,
		primaryButtonTitle,
		onPrimaryButtonPress,
		secondaryButtonTitle,
		onSecondaryButtonPress
	} = navigation.state.params
	return (
		<View style={styles.container}>
			<StatusBar hidden />
			<View style={styles.contentView}>
				<Image source={isSuccess ? successIcon : failureIcon} />
				<Text style={styles.title}>{message}</Text>
			</View>
			<View style={styles.bottomView}>
				<ActionButton
					style={styles.actionButton}
					title={primaryButtonTitle}
					onPress={() => onPrimaryButtonPress()}
					light
				/>
				<TextButton
					style={styles.actionButton}
					title={secondaryButtonTitle}
					onPress={() => onSecondaryButtonPress()}
					light
				/>
			</View>
		</View>
	)
}

ActionStatus.defaultProps = {
	isSuccess: true,
	onPrimaryButtonPress: () => {},
	onSecondaryButtonPress: () => {}
}
