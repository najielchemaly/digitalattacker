import React, { useState } from 'react'
import { View, Text } from 'react-native'

import styles from './styles'
import {
	HeaderView,
	QualifyingStep,
	ActionButton,
	TermsCheckbox,
	ExpandableListItem,
	ContentScrollView,
} from '../../components'
import { backArrow } from '../../assets/images'
import { strings, screenName } from '../../constants'
import { getQualifyingPointsList } from '../../constants/dummyData'

export default function Qualifying(props) {
	const { navigation } = props
	const { navigate, goBack } = navigation
	const [buttonDisabled, setButtonDisabled] = useState(true)

	function renderExpandableItems() {
		const items = getQualifyingPointsList()
		return items.map((item, index) => {
			return (
				<ExpandableListItem
					key={index}
					title={item.title}
					info={item.info}
					expandable={item.expandable}
					style={index === items.length - 1 && { borderBottomWidth: 0 }}
				/>
			)
		})
	}

	function handleTermsAndConditionsPress() {
		const data = {
			title: strings.termsAndConditionTitle,
			info: strings.termsAndConditionInfo,
		}
		navigate(screenName.contentView, data)
	}

	return (
		<View style={styles.container}>
			<HeaderView leftIcon={backArrow} onLeftPress={() => goBack()} />
			<ContentScrollView contentContainerStyle={styles.scrollViewContent}>
				<View>
					<Text style={styles.title}>{strings.qualifyingTitle}</Text>
					<QualifyingStep
						style={styles.step}
						image={backArrow}
						title={strings.qualifyingStep1}
					/>
					<QualifyingStep
						style={styles.step}
						image={backArrow}
						title={strings.qualifyingStep2}
					/>
					<QualifyingStep
						style={styles.step}
						image={backArrow}
						title={strings.qualifyingStep3}
					/>
					<Text style={styles.text}>{strings.qualifyingMorePoints}</Text>
					<View style={styles.listContainer}>{renderExpandableItems()}</View>
				</View>
			</ContentScrollView>
			<View style={styles.actionButtonContainer}>
				<TermsCheckbox
					style={styles.checkBox}
					onChangeValue={(value) => setButtonDisabled(!value)}
					onTermsPress={handleTermsAndConditionsPress}
				/>
				<ActionButton
					title={strings.continue}
					disabled={buttonDisabled}
					onPress={() => navigate(screenName.personalInformationNavigator)}
				/>
			</View>
		</View>
	)
}
