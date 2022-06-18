import React from 'react'
import { View, Text } from 'react-native'

import {
	ImageButton,
	OnBoardingProgress,
	KeyboardView,
	TextInputWithButton,
} from '../../../../components'
import { strings, screenName, variables } from '../../../../constants'
import styles from '../../styles'
import { backArrow } from '../../../../assets/images'

export default function EmailAddressStep(props) {
	const { navigation } = props
	const { navigate, goBack } = navigation
	const { params } = navigation.state
	const { onSubmitPress, onBoardingState } = params || props.params
	const steps = Object.keys(onBoardingState.personalInfo).length

	function handleOnSubmitPress(text) {
		onSubmitPress && onSubmitPress(text)
		onBoardingState.personalInfo.emailAddress = text
		navigate(screenName.passcodeStep, { onBoardingState })
	}

	return (
		<View style={styles.container}>
			<View style={styles.headerView}>
				<ImageButton source={backArrow} onPress={() => goBack()} />
				<OnBoardingProgress step={strings.personalInfo} progress={4 / steps} />
			</View>
			<KeyboardView style={styles.contentView}>
				<Text style={[styles.title, { paddingBottom: 0 }]}>
					{strings.whatsYourEmail}
				</Text>
				<Text style={styles.subtitle}>{strings.wellSendVerificationLink}</Text>
				<TextInputWithButton
					minLength={3}
					maxLength={30}
					keyboardType={'email-address'}
					onSubmit={(text) => handleOnSubmitPress(text)}
					value={onBoardingState.personalInfo.emailAddress}
					regex={variables.regex.email}
					autoCapitalize={'none'}
					autoFocus
				/>
			</KeyboardView>
		</View>
	)
}

EmailAddressStep.defaultProps = {
	params: { onSubmitPress: () => {} },
}
