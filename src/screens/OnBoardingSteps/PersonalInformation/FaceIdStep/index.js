import React, { useEffect, useState } from 'react'
import { View, Text, Image, Animated } from 'react-native'

import {
	ImageButton,
	OnBoardingProgress,
	KeyboardView,
	TextButton,
	ActionButton,
} from '../../../../components'
import { strings, screenName, variables } from '../../../../constants'
import styles from '../../styles'
import { backArrow, touchIdIcon, smileIcon } from '../../../../assets/images'
import { handleOnActivateBiometricPress } from '../../../../constants/functions'

export default function FaceIdStep(props) {
	const { navigation } = props
	const { navigate, goBack } = navigation
	const { params } = navigation.state
	const { onSubmitPress, onBoardingState } = params || props.params
	const steps = Object.keys(onBoardingState.personalInfo).length

	const [opacity, setOpacity] = useState(1)
	const [fadeAnim] = useState(new Animated.Value(opacity))

	useEffect(() => {
		Animated.timing(fadeAnim, {
			toValue: 0,
			duration: 1000,
			delay: 1000,
		}).start(() => setOpacity(0))
	}, [])

	function handleOnAuthentication() {
		onSubmitPress && onSubmitPress()
		onBoardingState.personalInfo.enableTouchId = true
		navigate(screenName.absherAccountNavigator, { onBoardingState })
	}

	function handleOnNoThanksPress() {
		onSubmitPress && onSubmitPress()
		onBoardingState.personalInfo.enableTouchId = false
		navigate(screenName.absherAccountNavigator, { onBoardingState })
	}

	return (
		<View style={styles.container}>
			<View style={styles.headerView}>
				<ImageButton source={backArrow} onPress={() => goBack()} />
				<OnBoardingProgress step={strings.personalInfo} progress={7 / steps} />
			</View>
			<KeyboardView style={styles.contentView}>
				<View style={styles.imageContainer}>
					<Image style={styles.image} source={touchIdIcon} />
					<Text style={[styles.title, styles.titleWithImage]}>
						{strings.touchIdTitle}
					</Text>
				</View>
				<View style={styles.bottomView}>
					<ActionButton
						title={strings.activateTouchId}
						onPress={() =>
							handleOnActivateBiometricPress(true, handleOnAuthentication)
						}
					/>
					<TextButton
						style={{ marginBottom: variables.appMargin }}
						title={strings.noThanks}
						onPress={() => handleOnNoThanksPress()}
					/>
				</View>
			</KeyboardView>
			{opacity !== 0 && (
				<Animated.View style={[styles.halaView, { opacity: fadeAnim }]}>
					<Image style={styles.popupImage} source={smileIcon} />
					<Text style={[styles.title, styles.halaTitle]}>
						{strings.greatJob} {onBoardingState.personalInfo.fullname}! {'\n'}
						{strings.yourPasscodeIsSet}
					</Text>
				</Animated.View>
			)}
		</View>
	)
}

FaceIdStep.defaultProps = {
	params: { onSubmitPress: () => {} },
}
