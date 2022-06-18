import React from 'react'
import { View, Text } from 'react-native'

import {
	ImageButton,
	OnBoardingProgress,
	KeyboardView,
	AutoCompleteView,
} from '../../../../components'
import { strings, screenName } from '../../../../constants'
import styles from '../../styles'
import { backArrow } from '../../../../assets/images'
import occupations from '../../../../assets/occupations.json'

export default function OccupationStep(props) {
	const { navigation } = props
	const { navigate, goBack } = navigation
	const { params } = navigation.state
	const { onSubmitPress, onBoardingState } = params || props.params
	const steps = Object.keys(onBoardingState.businessInfo).length

	function handleOnSubmitPress(text) {
		onSubmitPress && onSubmitPress(text)
		onBoardingState.businessInfo.occupation = text
		navigate(screenName.incomeStep, { multiSelect: true, onBoardingState })
	}

	return (
		<View style={styles.container}>
			<View style={styles.headerView}>
				<ImageButton source={backArrow} onPress={() => goBack()} />
				<OnBoardingProgress step={strings.businessInfo} progress={3 / steps} />
			</View>
			<KeyboardView style={styles.contentView}>
				<Text style={[styles.title, styles.noMargin, styles.marginTop]}>
					{strings.whatsYourOccupation}
				</Text>
				<AutoCompleteView
					autoFocus
					items={occupations}
					onSubmit={(text) => handleOnSubmitPress(text)}
				/>
			</KeyboardView>
		</View>
	)
}

OccupationStep.defaultProps = {
	params: { onSubmitPress: () => {} },
}
