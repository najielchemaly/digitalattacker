import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'

import {
	ImageButton,
	OnBoardingProgress,
	MultiSelectListItem,
	ActionButton,
} from '../../../../components'
import { strings, screenName } from '../../../../constants'
import styles from '../../styles'
import { backArrow } from '../../../../assets/images'
import { getIncomeSourceList } from '../../../../constants/dummyData'

export default function IncomeStep(props) {
	const { navigation } = props
	const { navigate, goBack } = navigation
	const { params } = navigation.state
	const { onSubmitPress, multiSelect, onBoardingState } = params || props.params
	const [itemsList, setItemsList] = useState([])
	const [incomeSource, setIncomeSource] = useState([])
	const [buttonDisabled, setButtonDisabled] = useState(true)
	const steps = Object.keys(onBoardingState.businessInfo).length

	useEffect(() => {
		setItemsList(getIncomeSourceList())
	}, [])

	function handleOnSelectItem(item, index) {
		let items = Array(...itemsList)
		!multiSelect && items.forEach((item) => (item.selected = false))
		items[index].selected = multiSelect ? !item.selected : true
		setItemsList(items)

		const selectedItems = itemsList.filter((item) => {
			return item.selected
		})
		setIncomeSource(selectedItems)
		setButtonDisabled(selectedItems.length === 0)
	}

	function handleOnContinuePress() {
		onSubmitPress && onSubmitPress()
		onBoardingState.businessInfo.incomeSource = incomeSource
		navigate(screenName.totalIncomeStep, { onBoardingState })
	}

	return (
		<View style={styles.container}>
			<View style={styles.headerView}>
				<ImageButton source={backArrow} onPress={() => goBack()} />
				<OnBoardingProgress step={strings.businessInfo} progress={4 / steps} />
			</View>
			<View style={styles.contentView}>
				<Text style={[styles.title, styles.noMargin]}>
					{strings.whatsYourIncomeSouce}
				</Text>
				<View>
					<FlatList
						data={itemsList}
						style={styles.flatList}
						keyExtractor={(item, index) => item + index}
						renderItem={({ item, index }) => (
							<MultiSelectListItem
								item={item}
								onSelectItem={() => handleOnSelectItem(item, index)}
							/>
						)}
					/>
				</View>
			</View>
			<View style={styles.actionButtonContainer}>
				<ActionButton
					style={styles.actionButton}
					title={strings.continue}
					titleStyle={styles.actionButtonTitle}
					icon={backArrow}
					onPress={() => handleOnContinuePress()}
					disabled={buttonDisabled}
				/>
			</View>
		</View>
	)
}

IncomeStep.defaultProps = {
	params: { onSubmitPress: () => {}, multiSelect: true },
}
