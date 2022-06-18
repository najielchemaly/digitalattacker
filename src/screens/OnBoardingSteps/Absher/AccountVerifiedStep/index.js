import React, { useEffect, useState } from 'react'
import { View, Text, Animated, Image } from 'react-native'

import { ImageButton, OnBoardingProgress } from '../../../../components'
import { strings, screenName } from '../../../../constants'
import styles from '../../styles'
import { backArrow, absherIcon } from '../../../../assets/images'

export default function AccountVerifiedStep(props) {
	const { navigation } = props
	const { navigate, goBack } = navigation
	const { params } = navigation.state
	const { onBoardingState } = params || props.params
	const steps = Object.keys(onBoardingState.absher).length

	const [opacity] = useState(1)
	const [fadeAnim] = useState(new Animated.Value(opacity))

	useEffect(() => {
		Animated.timing(fadeAnim, {
			toValue: 0,
			duration: 1000,
			delay: 1000,
		}).start(() => {
			onBoardingState.absher.accountVerified = true
			navigate(screenName.businessInformationNavigator, { onBoardingState })
		})
	}, [])

	return (
		<View style={styles.container}>
			<View style={styles.headerView}>
				<ImageButton source={backArrow} onPress={() => goBack()} />
				<OnBoardingProgress step={strings.absher} progress={2 / steps} />
			</View>
			{opacity !== 0 && (
				<Animated.View style={[styles.halaView, { opacity: fadeAnim }]}>
					<Image
						resizeMode={'center'}
						style={styles.image}
						source={absherIcon}
					/>
					<Text style={[styles.title, styles.halaTitle]}>
						{strings.nice}
						{onBoardingState.personalInfo.fullname}!
						{strings.yourAccountIsVerified}
					</Text>
				</Animated.View>
			)}
		</View>
	)
}
