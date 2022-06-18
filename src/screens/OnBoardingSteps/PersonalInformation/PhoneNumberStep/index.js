import React, { useState, useEffect } from 'react'
import { View, Text, Animated, Image } from 'react-native'

import {
	ImageButton,
	OnBoardingProgress,
	KeyboardView,
	TextButton,
	PhoneNumberView,
} from '../../../../components'
import { strings, screenName, variables } from '../../../../constants'
import styles from '../../styles'
import { backArrow, smileIcon } from '../../../../assets/images'
import {
	showNotSaudiMobileAlert,
	showExistingMobileAlert,
} from '../../../../constants/functions'

export default function PhoneNumberStep(props) {
	const { navigation } = props
	const { navigate, goBack } = navigation
	const { params } = navigation.state
	const { onSubmitPress, onBoardingState } = params || props.params

	const [autoFocus, setAutoFocus] = useState(false)
	const [opacity, setOpacity] = useState(1)
	const [fadeAnim] = useState(new Animated.Value(opacity))
	const steps = Object.keys(onBoardingState.personalInfo).length

	useEffect(() => {
		Animated.timing(fadeAnim, {
			toValue: 0,
			duration: 1000,
			delay: 1000,
		}).start()

		fadeAnim.addListener(({ value }) => {
			if (value === 0) setAutoFocus(true)

			setOpacity(value)
		})
	}, [])

	async function handleOnSubmitPress(text) {
		/***** TODO DUMMY *****/
		if (text === '+966 123456789') {
			showExistingMobileAlert(navigation)
			return
		}
		/*********************/

		onSubmitPress && onSubmitPress(text)
		onBoardingState.personalInfo.phoneNumber = text
		navigate(screenName.codeVerificationStep, { onBoardingState })
	}

	return (
		<View style={styles.container}>
			<View style={styles.headerView}>
				<ImageButton source={backArrow} onPress={() => goBack()} />
				<OnBoardingProgress step={strings.personalInfo} progress={2 / steps} />
			</View>
			<KeyboardView style={styles.phoneContentView}>
				<View />
				<View>
					<Text style={[styles.title, styles.marginTop]}>
						{strings.whatsYourNumberToVerify}
					</Text>
					<PhoneNumberView
						onSubmit={(text) => handleOnSubmitPress(text)}
						regex={variables.regex.phone}
						autoFocus={autoFocus}
						value={onBoardingState.personalInfo.phoneNumber}
					/>
				</View>
				<TextButton
					style={styles.textButton}
					title={strings.dontHaveKSANumber}
					onPress={() => showNotSaudiMobileAlert(navigation)}
				/>
			</KeyboardView>
			{opacity !== 0 && (
				<Animated.View style={[styles.halaView, { opacity: fadeAnim }]}>
					<Image style={styles.popupImage} source={smileIcon} />
					<Text style={[styles.title, { textAlign: 'center' }]}>
						{strings.niceToMeetYou}
						{onBoardingState.personalInfo.fullname}!
					</Text>
				</Animated.View>
			)}
		</View>
	)
}

PhoneNumberStep.defaultProps = {
	params: { onSubmitPress: () => {} },
}
