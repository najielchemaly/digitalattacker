import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'
import {
	TextButton,
	PasscodeView,
	KeyboardView,
	HeaderView
} from '../../components'
import { strings, screenName } from '../../constants'
import { backArrow } from '../../assets/images'

export default function PasscodeLogin(props) {
	const { navigation } = props
	const { navigate, goBack } = navigation

	return (
		<KeyboardView style={styles.container}>
			<HeaderView leftIcon={backArrow} onLeftPress={() => goBack()} />
			<View style={styles.contentView}>
				<Text style={styles.title}>{strings.signInWithPasscode}</Text>
				<PasscodeView
					onFulfill={() =>
						navigate(screenName.biometricLogin, { type: 'touchId' })
					}
				/>
			</View>
			<TextButton
				style={styles.forgotPasscode}
				title={'Forgot passcode?'}
				onPress={() => {}}
			/>
		</KeyboardView>
	)
}
