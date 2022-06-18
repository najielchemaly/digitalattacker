import React, { useState, useEffect } from 'react'

import styles from './styles'
import { ImageButton, BeneficiaryItem } from '../../components'
import { backArrow } from '../../assets/images'
import { TextInput, FlatList, StatusBar, View, Text } from 'react-native'
import { strings, screenName } from '../../constants'
import { showDeleteBeneficiaryAlert } from '../../constants/functions'

export default function SearchBeneficiary(props) {
	const { navigation } = props
	const { navigate, goBack, state } = navigation
	const params = state.params || props.params
	const { beneficiaries } = params
	const [allBeneficiaries] = useState(getBeneficiaryList())
	const [filteredBeneficiaries, setFilteredBeneficiaries] = useState(
		allBeneficiaries
	)

	function getBeneficiaryList() {
		let items = new Array()
		beneficiaries.forEach(item => {
			return item.data.forEach(element => items.push(element))
		})
		return items
	}

	function handleOnChangeText(text) {
		if (text === '') {
			setFilteredBeneficiaries(allBeneficiaries)
			return
		}

		setFilteredBeneficiaries(
			allBeneficiaries.filter(item =>
				item.beneficiaryName.toLowerCase().includes(text.toLowerCase())
			)
		)
	}

	function handleOnItemPress(data) {
		navigate(screenName.transfer, {
			beneficiary: data,
			accountBalance: '25,000'
		})
	}

	return (
		<View style={styles.container}>
			<StatusBar hidden />
			<View style={styles.searchBar}>
				<ImageButton
					style={styles.backArrow}
					source={backArrow}
					onPress={() => goBack()}
				/>
				<TextInput
					style={styles.textInput}
					onChangeText={text => handleOnChangeText(text)}
					placeholder={strings.searchBeneficiary}
					clearButtonMode={'while-editing'}
				/>
			</View>
			<FlatList
				keyboardShouldPersistTaps={'always'}
				style={styles.flatList}
				keyExtractor={() => Math.random()}
				data={filteredBeneficiaries}
				renderItem={({ item, _ }) => (
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
				ItemSeparatorComponent={() => <View style={styles.separator} />}
				ListEmptyComponent={() => (
					<Text style={styles.labelError}>{strings.couldntFindResult}</Text>
				)}
			/>
		</View>
	)
}

SearchBeneficiary.defaultProps = {
	params: { beneficiaries: [] }
}
