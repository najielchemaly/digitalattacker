import React, { useState, useEffect } from 'react'

import styles from './styles'
import {
	View,
	Image,
	ProgressViewIOS,
	Platform,
	ProgressBarAndroid,
} from 'react-native'
import {
	noInternetIcon,
	jailbrokenIcon,
	userBlockedIcon,
} from '../../assets/images'
import { colors } from '../../constants'

export default function OnBoardingProgress(props) {
	const { step, progress } = props
	const [steps, setSteps] = useState(props.steps)

	useEffect(() => {
		try {
			let updatedSteps = new Array(...steps)
			updatedSteps.filter(
				(item) => item.section === step
			)[0].progress = progress
			setSteps(updatedSteps)
		} catch {}
	}, [])

	function renderProgressView(item) {
		switch (Platform.OS) {
			case 'ios':
				return (
					<ProgressViewIOS
						style={styles.progressView}
						progressTintColor={colors.brownishGrey}
						progress={item.progress}
					/>
				)
			case 'android':
				return (
					<ProgressBarAndroid
						style={styles.progressView}
						styleAttr={'Horizontal'}
						progress={item.progress}
					/>
				)
			default:
				return null
		}
	}

	function renderSteps() {
		return steps.map((item, index) => {
			return (
				<View key={index} style={styles.progressContainer}>
					<Image style={styles.image} source={item.image} />
					{renderProgressView(item)}
				</View>
			)
		})
	}

	return <View style={styles.container}>{renderSteps()}</View>
}

OnBoardingProgress.defaultProps = {
	steps: [
		{
			section: 'Personal Information',
			image: noInternetIcon,
			progress: 0,
		},
		{
			section: 'Absher',
			image: jailbrokenIcon,
			progress: 0,
		},
		{
			section: 'Business Information',
			image: userBlockedIcon,
			progress: 0,
		},
	],
}
