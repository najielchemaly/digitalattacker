import React from 'react'
import { View, Text } from 'react-native'

import {
	ImageButton,
	OnBoardingProgress,
	ActionButton,
	TextButton,
} from '../../../../components'
import { strings, screenName } from '../../../../constants'
import styles from '../../styles'
import { backArrow } from '../../../../assets/images'
import { showUSCitizenAlert } from '../../../../constants/functions'

export default function USCitizenStep(props) {
	const { navigation } = props
	const { navigate, goBack } = navigation
	const { params } = navigation.state
	const { onSubmitPress, onBoardingState } = params || props.params
	const steps = Object.keys(onBoardingState.businessInfo).length

	function handleOnPress(isUSCitizen) {
		onSubmitPress && onSubmitPress(isUSCitizen)
		onBoardingState.businessInfo.isUSCitizen = isUSCitizen
		navigate(screenName.residentTaxStep, { onBoardingState })
	}

	function handleWhatMakesMeUSPersonPress() {
		const data = {
			title: strings.whatMakesUSPerson,
			info: strings.whatMakesUSPersonInfo,
		}
		navigate(screenName.contentView, data)
	}

	return (
		<View style={styles.container}>
			<View style={styles.headerView}>
				<ImageButton source={backArrow} onPress={() => goBack()} />
				<OnBoardingProgress step={strings.businessInfo} progress={7 / steps} />
			</View>
			<View style={styles.contentView}>
				<View style={styles.flexTwo}>
					<Text style={styles.title}>{strings.areYouUSCitizen}</Text>
					<ActionButton
						style={[styles.lightActionButton, styles.leftAlignedActionButton]}
						title={strings.noImNot}
						titleStyle={styles.actionButtonTitle}
						onPress={() => handleOnPress(false)}
						light
					/>
					<ActionButton
						style={[styles.xLightActionButton, styles.leftAlignedActionButton]}
						title={strings.yes}
						titleStyle={styles.actionButtonTitle}
						onPress={() => showUSCitizenAlert(navigation)}
						light
					/>
				</View>
				<View style={styles.textButtonContainer}>
					<TextButton
						title={strings.whatMakesUSPerson}
						onPress={() => handleWhatMakesMeUSPersonPress()}
					/>
				</View>
			</View>
		</View>
	)
}

USCitizenStep.defaultProps = {
	params: { onSubmitPress: () => {} },
}
