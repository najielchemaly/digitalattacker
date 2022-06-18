import React from 'react'
import { View, Text } from 'react-native'

import {
	ImageButton,
	OnBoardingProgress,
	KeyboardView,
	PasscodeView,
} from '../../../../components'
import { strings, screenName } from '../../../../constants'
import styles from '../../styles'
import { backArrow } from '../../../../assets/images'

export default function PasscodeStep(props) {
	const { navigation } = props
	const { navigate, goBack } = navigation
	const { params } = navigation.state
	const { onSubmitPress, onBoardingState } = params || props.params
	const steps = Object.keys(onBoardingState.personalInfo).length

	function handleOnSubmitPress(text) {
		onSubmitPress && onSubmitPress(text)
		onBoardingState.personalInfo.passcode = text
		navigate(screenName.reEnterPasscodeStep, { onBoardingState })
	}

	return (
		<View style={styles.container}>
			<View style={styles.headerView}>
				<ImageButton source={backArrow} onPress={() => goBack()} />
				<OnBoardingProgress step={strings.personalInfo} progress={5 / steps} />
			</View>
			<KeyboardView style={styles.contentView}>
				<Text style={styles.title}>{strings.setYourLoginPasscode}</Text>
				<PasscodeView
					style={styles.passcodeView}
					onFulfill={(code) => handleOnSubmitPress(code)}
					value={onBoardingState.personalInfo.passcode}
				/>
			</KeyboardView>
		</View>
	)
}

PasscodeStep.defaultProps = {
	params: { onSubmitPress: () => {} },
}
