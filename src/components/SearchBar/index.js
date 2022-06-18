import React, { useState } from 'react'
import {
	View,
	TextInput,
	Image,
	TouchableOpacity,
	Keyboard
} from 'react-native'

import { searchIcon, closeIcon } from '../../assets/images'
import styles from './styles'
import { appStyles, strings } from '../../constants'

export default function SearchBar(props) {
	const { onChangeText, style } = props
	const [value, setValue] = useState('')

	function handleOnChangeText(text) {
		setValue(text)
		onChangeText(text)
	}

	function handleOnCancelPress() {
		Keyboard.dismiss()
		onChangeText('')
		setValue('')
	}

	return (
		<View style={style}>
			<View style={[styles.searchContainer, appStyles.fieldBox]}>
				<Image source={searchIcon} style={styles.icon} />
				<TextInput
					style={styles.textTnput}
					placeholder={strings.searchBeneficiary}
					onChangeText={text => handleOnChangeText(text)}
					value={value}
				/>
				{value !== '' && (
					<TouchableOpacity
						style={styles.closeContainer}
						activeOpacity={0.8}
						onPress={() => handleOnCancelPress()}
					>
						<Image style={styles.closeIcon} source={closeIcon} />
					</TouchableOpacity>
				)}
			</View>
		</View>
	)
}

SearchBar.defaultProps = {
	onChangeText: text => {}
}
