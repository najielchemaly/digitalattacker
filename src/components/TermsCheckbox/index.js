import React, { useState } from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'

import styles from './styles'
import { checkedIcon } from '../../assets/images'
import { strings } from '../../constants'
import TextButton from '../TextButton'

export default function TermsCheckbox(props) {
	const { style, onChangeValue, onTermsPress } = props
	const [checked, setChecked] = useState(false)

	function handleOnCheckPress() {
		setChecked(!checked)
		onChangeValue(!checked)
	}

	return (
		<View style={[styles.container, style]}>
			<TouchableOpacity
				style={styles.checkboxContainer}
				activeOpacity={0.8}
				onPress={() => handleOnCheckPress()}
			>
				{checked && <Image style={styles.checkboxIcon} source={checkedIcon} />}
			</TouchableOpacity>
			<View style={styles.textContainer}>
				<Text style={styles.text}>{strings.agreeToFollowing}</Text>
				<TextButton
					title={strings.termsAndCondition}
					titleStyle={styles.textClickable}
					onPress={() => onTermsPress()}
				/>
			</View>
		</View>
	)
}

TermsCheckbox.defaultProps = {
	onChangeValue: value => {}
}
