import React, { useState } from 'react'
import { View, Text } from 'react-native'

import {
	ImageButton,
	OnBoardingProgress,
	ActionButton,
	ResidentTaxListItem,
	KeyboardView,
	TextButton,
	ContentScrollView,
} from '../../../../components'
import { strings, screenName } from '../../../../constants'
import styles from '../../styles'
import { backArrow } from '../../../../assets/images'

export default function ResidentTaxStep(props) {
	const { navigation, defaultResidencies } = props
	const { navigate, goBack } = navigation
	const { params } = navigation.state
	const { onSubmitPress, onBoardingState } = params || props.params
	const [isResidentForTax, setIsResidentForTax] = useState(false)
	const [selectedIndex, setSelectedIndex] = useState(-1)
	const [residencies, setResidencies] = useState(defaultResidencies)
	const steps = Object.keys(onBoardingState.businessInfo).length

	function handleNotResidentForTaxPress() {
		setSelectedIndex(0)
		setIsResidentForTax(false)
		onSubmitPress && onSubmitPress(false)
		onBoardingState.businessInfo.residencies = []
		navigate(screenName.selectCardStep, { onBoardingState })
	}

	function handleResidentForTaxPress() {
		setSelectedIndex(1)
		setIsResidentForTax(true)
		onSubmitPress && onSubmitPress(true)
	}

	function handleOnChangeTinText(text, index) {
		let items = Array(...residencies)
		items[index].taxIdentityNumber = text
		setResidencies(items)
	}

	function renderResidencies() {
		return (
			isResidentForTax && (
				<View>
					<Text style={styles.bitInformation}>
						{strings.weNeedFewInformation}
					</Text>
					{residencies.map((item, index) => {
						return (
							<ResidentTaxListItem
								key={index}
								data={item}
								onChangeTinText={(text) => handleOnChangeTinText(text, index)}
							/>
						)
					})}
					<TextButton
						style={styles.addAnotherTinContainer}
						title={`${strings.haveMultipleResidencies}\n${strings.addAnotherTin}`}
						titleStyle={styles.addAnotherTin}
					/>
				</View>
			)
		)
	}

	return (
		<KeyboardView style={styles.container}>
			<View style={styles.headerView}>
				<ImageButton source={backArrow} onPress={() => goBack()} />
				<OnBoardingProgress step={strings.businessInfo} progress={8 / steps} />
			</View>
			<ContentScrollView
				contentContainerStyle={[
					styles.scrollView,
					!isResidentForTax && styles.flexOne,
				]}
			>
				<Text style={styles.title}>{strings.areYouResidentForTax}</Text>
				<ActionButton
					style={[
						styles.lightActionButton,
						styles.leftAlignedActionButton,
						selectedIndex === 0 && styles.actionButtonSelected,
					]}
					title={strings.noJustKSA}
					titleStyle={[
						styles.actionButtonTitle,
						selectedIndex === 0 && styles.actionButtonTitleSelected,
					]}
					onPress={() => handleNotResidentForTaxPress()}
				/>
				<ActionButton
					style={[
						styles.xLightActionButton,
						styles.leftAlignedActionButton,
						selectedIndex === 1 && styles.actionButtonSelected,
					]}
					title={strings.yes}
					titleStyle={[
						styles.actionButtonTitle,
						selectedIndex === 1 && styles.actionButtonTitleSelected,
					]}
					onPress={() => handleResidentForTaxPress()}
				/>
				{renderResidencies()}
			</ContentScrollView>
		</KeyboardView>
	)
}

ResidentTaxStep.defaultProps = {
	params: { onSubmitPress: () => {} },
	defaultResidencies: [{ taxIdentityNumber: '', additionalInfo: '' }],
}
