import React, { useState, useEffect } from 'react'
import { View, Text, Animated, Image } from 'react-native'

import {
	TextInputWithButton,
	ImageButton,
	OnBoardingProgress,
	KeyboardView,
} from '../../../../components'
import { strings, screenName } from '../../../../constants'
import styles from '../../styles'
import { backArrow, halaIcon } from '../../../../assets/images'
import { OnBoardingState } from '../../../../hooks'

export default function FullNameStep(props) {
	const { navigation } = props
	const { navigate, pop } = navigation
	const { params } = navigation.state
	const { onSubmitPress } = params || props.params

	const [autoFocus, setAutoFocus] = useState(false)
	const [opacity, setOpacity] = useState(1)
	const [fadeAnim] = useState(new Animated.Value(opacity))

	const onBoardingState = OnBoardingState()
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

	function handleOnSubmitPress(text) {
		onSubmitPress && onSubmitPress(text)
		onBoardingState.personalInfo.fullname = text
		navigate(screenName.phoneNumberStep, { onBoardingState })
	}

	return (
		<View style={styles.container}>
			<View style={styles.headerView}>
				<ImageButton source={backArrow} onPress={() => pop()} />
				<OnBoardingProgress step={strings.personalInfo} progress={1 / steps} />
			</View>
			<KeyboardView style={styles.contentView}>
				<Text style={[styles.title, styles.marginBottom]}>
					{strings.whatCanWeCallYou}
				</Text>
				<TextInputWithButton
					minLength={3}
					maxLength={30}
					autoFocus={autoFocus}
					onSubmit={(text) => handleOnSubmitPress(text)}
					value={onBoardingState.personalInfo.fullname}
				/>
			</KeyboardView>
			{opacity !== 0 && (
				<Animated.View style={[styles.halaView, { opacity: fadeAnim }]}>
					<Image style={styles.popupImage} source={halaIcon} />
					<Text style={styles.title}>{strings.marhaba}</Text>
				</Animated.View>
			)}
		</View>
	)
}

FullNameStep.defaultProps = {
	params: { onSubmitPress: (text) => {} },
}
