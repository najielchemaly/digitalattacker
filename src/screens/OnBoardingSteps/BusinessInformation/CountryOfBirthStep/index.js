import React from 'react'
import { View, Text, Keyboard } from 'react-native'

import {
	ImageButton,
	OnBoardingProgress,
	KeyboardView,
	AutoCompleteView,
} from '../../../../components'
import { strings, screenName } from '../../../../constants'
import styles from '../../styles'
import { backArrow } from '../../../../assets/images'
import countries from '../../../../assets/countries.json'
import { showNoneUSAccountAlert } from '../../../../constants/functions'

export default function CountryOfBirthStep(props) {
	const { navigation } = props
	const { navigate, pop } = navigation
	const { params } = navigation.state
	const { onSubmitPress, onBoardingState } = params || props.params
	const steps = Object.keys(onBoardingState.businessInfo).length

	function handleOnSubmitPress(text) {
		if (text.includes('United States')) {
			showNoneUSAccountAlert(navigation)
			Keyboard.dismiss()
			return
		}

		onSubmitPress && onSubmitPress(text)
		onBoardingState.businessInfo.countryOfBirth = text
		navigate(screenName.employmentStep, { onBoardingState })
	}

	return (
		<View style={styles.container}>
			<View style={styles.headerView}>
				<ImageButton source={backArrow} onPress={() => pop()} />
				<OnBoardingProgress step={strings.businessInfo} progress={1 / steps} />
			</View>
			<KeyboardView style={styles.contentView}>
				<Text style={[styles.title, styles.noMargin, styles.marginTop]}>
					{strings.whatsYourCountryOfBirth}
				</Text>
				<AutoCompleteView
					autoFocus
					items={countries}
					onSubmit={(text) => handleOnSubmitPress(text)}
					value={onBoardingState.businessInfo.countryOfBirth}
				/>
			</KeyboardView>
		</View>
	)
}

CountryOfBirthStep.defaultProps = {
	params: { onSubmitPress: () => {} },
}
