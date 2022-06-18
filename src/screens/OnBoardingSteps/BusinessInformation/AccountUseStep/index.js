import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'

import {
	ImageButton,
	OnBoardingProgress,
	MultiSelectListItem,
} from '../../../../components'
import { strings, screenName } from '../../../../constants'
import styles from '../../styles'
import { backArrow } from '../../../../assets/images'
import { getAccountUseList } from '../../../../constants/dummyData'

export default function AccountUseStep(props) {
	const { navigation } = props
	const { navigate, goBack } = navigation
	const { params } = navigation.state
	const { onSubmitPress, multiSelect, onBoardingState } = params || props.params
	const [itemsList, setItemsList] = useState([])
	const steps = Object.keys(onBoardingState.businessInfo).length

	useEffect(() => {
		setItemsList(getAccountUseList())
	}, [])

	function handleOnSelectItem(item, index) {
		let items = Array(...itemsList)
		!multiSelect && items.forEach((item) => (item.selected = false))
		items[index].selected = multiSelect ? !item.selected : true
		setItemsList(items)

		onSubmitPress && onSubmitPress(item.title)
		onBoardingState.businessInfo.accountUsage = item.title
		navigate(screenName.usCitizenStep, { onBoardingState })
	}

	return (
		<View style={styles.container}>
			<View style={styles.headerView}>
				<ImageButton source={backArrow} onPress={() => goBack()} />
				<OnBoardingProgress step={strings.businessInfo} progress={6 / steps} />
			</View>
			<View style={styles.contentView}>
				<Text style={styles.title}>{strings.whatAreYouPlanning}</Text>
				<View>
					<FlatList
						data={itemsList}
						style={[styles.flatList, styles.marginBottom]}
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
		</View>
	)
}

AccountUseStep.defaultProps = {
	params: { onSubmitPress: () => {} },
}
