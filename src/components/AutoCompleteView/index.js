import React, { useState } from 'react'
import {
	View,
	Text,
	TouchableOpacity,
	Image,
	TextInput,
	FlatList
} from 'react-native'

import { continueIcon } from '../../assets/images'

import styles from './styles'
import { appStyles, strings } from '../../constants'

export default function AutoCompleteView(props) {
	const { valid, onSubmit, style, items } = props
	const [value, setValue] = useState('')
	const [continueDisabled, setContinueDisabled] = useState(true)
	const [filteredItems, setFilteredItems] = useState(items)
	const [listVisible, setListVisible] = useState(false)

	function handleOnTextChange(text) {
		setValue(text)

		setFilteredItems(
			items.filter(item => {
				return item.toLowerCase().includes(text.toLowerCase())
			})
		)

		setListVisible(text.length > 1)
		setContinueDisabled(true)
	}

	function handleOnSelectItem(item) {
		setValue(capitilizedString(item))
		setContinueDisabled(false)
		setListVisible(false)
	}

	function capitilizedString(text) {
		return text
			.split(' ')
			.map(elem => elem.substring(0, 1).toUpperCase() + elem.substring(1))
			.join(' ')
	}

	return (
		<View style={styles.container}>
			<View
				style={[styles.inputContainer, !valid && styles.containerError, style]}
			>
				<TextInput
					{...props}
					value={value || props.value}
					style={[styles.textInput, styles.text]}
					onChangeText={text => handleOnTextChange(text)}
					onSubmitEditing={() => !continueDisabled && onSubmit(value)}
				/>
				<TouchableOpacity
					onPress={() => onSubmit(value)}
					style={continueDisabled && appStyles.disabled}
					disabled={continueDisabled}
					activeOpacity={0.8}
				>
					<Image style={styles.continue} source={continueIcon} />
				</TouchableOpacity>
			</View>
			{listVisible && (
				<FlatList
					style={styles.flatList}
					keyboardShouldPersistTaps={'always'}
					keyExtractor={(item, index) => item + index}
					data={filteredItems}
					renderItem={({ item, index }) => (
						<TouchableOpacity
							key={index}
							onPress={() => handleOnSelectItem(item)}
						>
							<Text style={styles.listText}>{capitilizedString(item)}</Text>
						</TouchableOpacity>
					)}
					ListEmptyComponent={() => (
						<Text style={styles.labelError}>{strings.couldntFindResult}</Text>
					)}
				/>
			)}
			{!valid && <Text style={styles.labelError}>{strings.incorrectOTP}</Text>}
		</View>
	)
}

AutoCompleteView.defaultProps = {
	valid: true,
	items: [],
	autoFocus: true,
	onSubmit: text => {},
	returnKeyType: 'next',
	blurOnSubmit: false,
	autoCorrect: false
}
