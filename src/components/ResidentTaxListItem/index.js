import React from 'react'
import { View, TextInput } from 'react-native'

import styles from './styles'
import countries from '../../assets/countries.json'
import { OnBoardingDropDown, RadioButtonGroup, TextButton } from '..'
import { strings } from '../../constants'

export default function ResidentTaxListItem(props) {
	const { data, onChangeTinText } = props

	function renderRadioButtonItems() {
		return [
			{
				title: strings.iHaveTin,
				children: (
					<TextInput
						keyboardType={'number-pad'}
						placeholder={strings.taxIdentityNumber}
						style={styles.taxInput}
						value={data.taxIdentityNumber}
						onChangeText={text => onChangeTinText(text)}
					/>
				)
			},
			{
				title: strings.iDontHaveTin,
				children: null
			}
		]
	}

	return (
		<View style={styles.container}>
			<View style={styles.contentView}>
				<OnBoardingDropDown
					style={styles.dropdownView}
					items={countries}
					noBorder
				/>
				<RadioButtonGroup items={renderRadioButtonItems()} />
			</View>
			<TextButton
				style={styles.deleteButton}
				titleStyle={styles.deleteButtonTitle}
				title={strings.delete}
			/>
		</View>
	)
}
