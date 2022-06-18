import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'
import { HeaderView, PhoneNumberView, KeyboardView } from '../../components'
import { backArrow } from '../../assets/images'
import { screenName, strings } from '../../constants'

export default function Login(props) {
	const { navigation } = props
	const { navigate, goBack } = navigation

	function handleOnSubmitPress(phoneNumber) {
		navigate(screenName.otpVerification, {
			title: strings.enterOTP,
			message: `${strings.weSentCode} ${phoneNumber}`,
			onSubmit: () => navigate(screenName.passcodeLogin)
		})
	}

	return (
		<KeyboardView style={styles.container}>
			<HeaderView
				leftIcon={backArrow}
				onLeftPress={() => goBack(screenName.initialScreen)}
			/>
			<View style={styles.contentView}>
				<Text style={styles.title}>{strings.whatsYourNumber}</Text>
				<PhoneNumberView
					style={styles.phoneNumberView}
					onSubmit={handleOnSubmitPress}
					autoFocus
				/>
			</View>
		</KeyboardView>
	)
}
