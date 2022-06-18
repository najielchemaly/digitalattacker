import React, { useEffect, useState } from 'react'
import { View, Text, Animated, Image } from 'react-native'

import {
	ImageButton,
	OnBoardingProgress,
	ActionButton,
	TextButton,
} from '../../../../components'
import { strings, screenName, variables } from '../../../../constants'
import styles from '../../styles'
import {
	backArrow,
	absherIcon,
	accountLinkedIcon,
} from '../../../../assets/images'
import { showNoAsherAccountAlert } from '../../../../constants/functions'

export default function VerifyAccountStep(props) {
	const { navigation } = props
	const { navigate, pop } = navigation
	const { params } = navigation.state
	const { onSubmitPress, onBoardingState } = params || props.params
	const steps = Object.keys(onBoardingState.absher).length

	const [opacity, setOpacity] = useState(1)
	const [fadeAnim] = useState(new Animated.Value(opacity))

	useEffect(() => {
		Animated.timing(fadeAnim, {
			toValue: 0,
			duration: 1000,
			delay: 2000,
		}).start(() => setOpacity(0))
	}, [])

	function handleOnContinuePress() {
		onSubmitPress && onSubmitPress()
		onBoardingState.absher.accountCreated = true
		navigate(screenName.accountVerifiedStep, { onBoardingState })
	}

	return (
		<View style={styles.container}>
			<View style={styles.headerView}>
				<ImageButton source={backArrow} onPress={() => pop()} />
				<OnBoardingProgress step={strings.absher} progress={1 / steps} />
			</View>
			<View style={[styles.contentView, { alignItems: 'center' }]}>
				<Image
					style={[styles.popupImage, { marginBottom: variables.appMargin }]}
					source={absherIcon}
				/>
				<Text style={[styles.title, styles.halaTitle, { paddingBottom: 15 }]}>
					{strings.verifyYourIdentityTitle}
				</Text>
				<Text style={[styles.subtitle, styles.halaTitle]}>
					{strings.verifyYourIdentityInfo}
				</Text>
			</View>
			<View style={[styles.bottomView, { marginBottom: variables.appMargin }]}>
				<ActionButton
					title={strings.continueToAbsher}
					onPress={() => handleOnContinuePress()}
				/>
				<TextButton
					style={{ marginTop: 10 }}
					title={strings.iDontHaveAbsher}
					onPress={() => showNoAsherAccountAlert(navigation)}
				/>
			</View>
			{opacity !== 0 && (
				<Animated.View style={[styles.halaView, { opacity: fadeAnim }]}>
					<Image
						style={{ height: 90, aspectRatio: 3 / 2, marginBottom: 20 }}
						source={accountLinkedIcon}
					/>
					<Text style={[styles.title, styles.halaTitle]}>
						{strings.nice}
						{onBoardingState.personalInfo.fullname}!{'\n'}
						{strings.youAreRegisteredPrefix}
						{strings.appName}
						{strings.youAreRegisteredSuffix}
					</Text>
				</Animated.View>
			)}
		</View>
	)
}
