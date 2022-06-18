import React from 'react'
import { View, Text, TouchableOpacity, Clipboard } from 'react-native'
import Toast from 'react-native-simple-toast'

import { HeaderView, ActionButton, ListItem } from '../../../components'
import styles from './styles'
import { backArrow } from '../../../assets/images'
import { strings } from '../../../constants'
import { handleOnSharePress } from '../../../constants/functions'

export default function ShareIBAN(props) {
	const { data, navigation } = props
	const { goBack } = navigation
	// const { data } = navigation.state.params

	function handleOnCopyIBAN() {
		Clipboard.setString(data.IBAN)
		Toast.show(strings.ibanCopied)
	}

	return (
		<View style={styles.container}>
			<HeaderView
				leftIcon={backArrow}
				title={strings.addMoney}
				onLeftPress={() => goBack()}
			/>
			<View>
				<Text style={styles.title}>{strings.shareIBANPlaceholder}</Text>
			</View>
			<View style={styles.contentView}>
				<ListItem label={strings.accountName} value={data.accountName} />
				<TouchableOpacity
					activeOpacity={0.9}
					onLongPress={() => handleOnCopyIBAN()}
				>
					<ListItem label={strings.iban} value={data.IBAN} />
				</TouchableOpacity>
				<ListItem label={strings.accountNumber} value={data.accountNumber} />
				<ListItem label={strings.swiftCode} value={data.swiftCode} />
			</View>
			<ActionButton
				style={styles.actionButton}
				title={strings.share}
				onPress={async () => {
					const message = `${strings.accountName}: ${data.accountName}\n ${strings.iban}: ${data.IBAN}`
					await handleOnSharePress(message)
				}}
			/>
		</View>
	)
}

ShareIBAN.defaultProps = {
	data: {
		accountName: 'Bodour Al Rafi',
		IBAN: 'SA 03 8000 0000 6080 1016 7519',
		accountNumber: '10167519',
		swiftCode: 'NBOKSAJE'
	}
}
