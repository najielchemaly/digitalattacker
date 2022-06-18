import React, { useState, useEffect } from 'react'
import { View, Text, Animated, Image } from 'react-native'

import { ImageButton, OnBoardingProgress } from '../../../../components'
import { strings } from '../../../../constants'
import styles from '../../styles'
import { backArrow, idCardIcon } from '../../../../assets/images'

export default function SelectCardStep(props) {
	const { navigation } = props
	const { navigate, goBack } = navigation
	const { params } = navigation.state
	const { onBoardingState } = params

	const [opacity, setOpacity] = useState(1)
	const [fadeAnim] = useState(new Animated.Value(opacity))
	const steps = Object.keys(onBoardingState.businessInfo).length

	useEffect(() => {
		Animated.timing(fadeAnim, {
			toValue: 0,
			duration: 1000,
			delay: 1000,
		}).start(() => setOpacity(0))
	}, [])

	return (
		<View style={styles.container}>
			<View style={styles.headerView}>
				<ImageButton source={backArrow} onPress={() => goBack()} />
				<OnBoardingProgress step={strings.businessInfo} progress={9 / steps} />
			</View>
			{opacity !== 0 && (
				<Animated.View style={[styles.halaView, { opacity: fadeAnim }]}>
					<Image
						resizeMode={'center'}
						style={styles.popupImage}
						source={idCardIcon}
					/>
					<Text style={[styles.title, styles.halaTitle]}>
						{strings.allDonePrefix}
						{onBoardingState.personalInfo.fullname}
						{strings.allDoneSuffix}
					</Text>
				</Animated.View>
			)}
		</View>
	)
}
