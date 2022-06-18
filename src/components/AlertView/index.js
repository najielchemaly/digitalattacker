import React from 'react'
import { View, Text, Image, Modal } from 'react-native'

import styles from './styles'
import ActionButton from '../ActionButton'

export default function AlertView(props) {
	const { navigation } = props
	const { goBack } = navigation
	const { params } = navigation.state || props.params
	const {
		image,
		title,
		message,
		confirmTitle,
		onConfirmPress,
		cancelTitle,
		onCancelPress
	} = params

	function handleOnConfirmPress() {
		onConfirmPress && onConfirmPress()
		goBack()
	}

	function handleOnCancelPress() {
		goBack()
		onCancelPress && onCancelPress()
	}

	return (
		<Modal animationType={'fade'} transparent>
			<View style={styles.container}>
				<View style={styles.overlay} />
				<View style={styles.popupView}>
					{image && <Image style={styles.image} source={image} />}
					<Text style={styles.title}>{title}</Text>
					<Text style={styles.message}>{message}</Text>
					{confirmTitle && (
						<ActionButton
							style={styles.actionButton}
							title={confirmTitle}
							onPress={() => handleOnConfirmPress()}
						/>
					)}
					{cancelTitle && (
						<ActionButton
							style={styles.actionButton}
							title={cancelTitle}
							onPress={() => handleOnCancelPress()}
							light
						/>
					)}
				</View>
			</View>
		</Modal>
	)
}
