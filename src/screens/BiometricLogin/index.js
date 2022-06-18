import React from 'react'
import { View, Image, Text } from 'react-native'

import styles from './styles'
import { HeaderView, ActionButton, TextButton } from '../../components'
import { backArrow, faceIdIcon, touchIdIcon } from '../../assets/images'
import { strings, screenName } from '../../constants'
import {
	handleOnActivateBiometricPress,
	navigateToMyFeed,
} from '../../constants/functions'

export default function BiometricLogin(props) {
	const { navigation } = props
	const { navigate, goBack } = navigation
	const { params } = navigation.state
	const type = params ? params.type : 'touchId'
	const isTouchId = type === 'touchId'

	return (
		<View style={styles.container}>
			<HeaderView leftIcon={backArrow} onLeftPress={() => goBack()} />
			<View style={styles.contentView}>
				<Image
					style={styles.icon}
					source={isTouchId ? touchIdIcon : faceIdIcon}
				/>
				<Text style={styles.title}>
					{isTouchId ? strings.touchIdTitle : strings.faceIdTitle}
				</Text>
			</View>
			<View style={styles.bottomView}>
				<ActionButton
					title={isTouchId ? strings.activateTouchId : strings.activateFaceId}
					onPress={() => handleOnActivateBiometricPress(isTouchId)}
				/>
				<TextButton
					style={styles.textButton}
					title={strings.noThanks}
					onPress={() => navigateToMyFeed(navigation)}
				/>
			</View>
		</View>
	)
}
