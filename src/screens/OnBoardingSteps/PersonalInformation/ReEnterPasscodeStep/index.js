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

export default function ReEnterPasscodeStep(props) {
	const { navigation } = props
	const { navigate, goBack } = navigation
	const { params } = navigation.state
	const { onSubmitPress, onBoardingState } = params || props.params
	const steps = Object.keys(onBoardingState.personalInfo).length

	function handleOnSubmitPress(text) {
		onSubmitPress && onSubmitPress(text)
		onBoardingState.personalInfo.confirmedPasscode = true
		navigate(screenName.faceIdStep, { onBoardingState })
	}

	return (
		<View style={styles.container}>
			<View style={styles.headerView}>
				<ImageButton source={backArrow} onPress={() => goBack()} />
				<OnBoardingProgress step={strings.personalInfo} progress={6 / steps} />
			</View>
			<KeyboardView style={styles.contentView}>
				<Text style={[styles.title, styles.marginBottom]}>
					{strings.reEnterToBeCertain}
				</Text>
				<PasscodeView
					onFulfill={(code) => handleOnSubmitPress(code)}
					passcode={onBoardingState.personalInfo.passcode}
				/>
			</KeyboardView>
		</View>
	)
}

ReEnterPasscodeStep.defaultProps = {
	params: { onSubmitPress: () => {} },
}
