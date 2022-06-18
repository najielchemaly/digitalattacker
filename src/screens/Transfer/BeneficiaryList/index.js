import React, { useState } from 'react'
import { View, SectionList, Text } from 'react-native'

import {
	HeaderView,
	ActionButton,
	TabView,
	BeneficiaryItem,
	ListItemPlaceholder
} from '../../../components'
import styles from './styles'
import { screenName, strings } from '../../../constants'
import { backArrow, searchIcon2 } from '../../../assets/images'
import { getBeneficiaryList } from '../../../constants/dummyData'
import { showDeleteBeneficiaryAlert } from '../../../constants/functions'

export default function BeneficiaryList(props) {
	const { navigation } = props
	const { navigate, goBack } = navigation

	const pages = [{ title: strings.toBankAccount }, { title: strings.toContact }]
	const [showBeneficiaries, setShowBeneficiaries] = useState(true)

	const beneficiaries = getBeneficiaryList()

	function handleOnItemPress(data) {
		navigate({
			routeName: screenName.transfer,
			key: screenName.beneficiaryList,
			params: { beneficiary: data, accountBalance: '25,000' }
		})
	}

	function handleOnSearchPress() {
		navigate({
			routeName: screenName.searchBeneficiary,
			key: screenName.beneficiaryList,
			params: { beneficiaries }
		})
	}

	return (
		<View style={styles.container}>
			<HeaderView
				leftIcon={backArrow}
				onLeftPress={() => goBack()}
				title={strings.transfer}
				rightIcon={searchIcon2}
				onRightPress={() => handleOnSearchPress()}
			/>
			<TabView
				style={styles.tabView}
				pages={pages}
				onPress={index => setShowBeneficiaries(index === 0)}
			/>
			{showBeneficiaries && (
				<View style={styles.listContainer}>
					{/* <SearchBar
						style={styles.searchBar}
						onChangeText={text => handleOnSearchBarChangeText(text)}
					/> */}
					<SectionList
						sections={beneficiaries}
						ItemSeparatorComponent={() => <View style={styles.separator} />}
						keyExtractor={(item, index) => item + index}
						renderItem={({ item, index }) => (
							<BeneficiaryItem
								item={item}
								onPress={() => handleOnItemPress(item)}
								onViewPress={() => navigate(screenName.viewBeneficiary)}
								onDeletePress={() =>
									showDeleteBeneficiaryAlert(navigation, item.beneficiaryName)
								}
								swipeable
							/>
						)}
						renderSectionHeader={({ section }) => {
							const index = beneficiaries.indexOf(section)
							return (
								<View
									style={[
										styles.headerSeparator,
										index !== 0 && styles.headerMargin
									]}
								>
									<Text style={styles.sectionHeader}>{section.title}</Text>
								</View>
							)
						}}
					/>
					<ActionButton
						style={styles.actionButton}
						title={strings.newBeneficiary}
						onPress={() => navigate(screenName.newBeneficiary)}
					/>
				</View>
			)}
			{!showBeneficiaries && (
				<ListItemPlaceholder
					style={styles.listItemPlaceholder}
					title={strings.letsAddNewBeneficiary}
					subtitle={strings.letsAddNewBeneficiaryDesc}
					buttonTitle={strings.newBeneficiary}
					onPress={() => navigate(screenName.newBeneficiary)}
				/>
			)}
		</View>
	)
}
