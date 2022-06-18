import React from 'react'
import { View, TouchableOpacity, Clipboard } from 'react-native'
import Toast from 'react-native-simple-toast'

import { HeaderView, ActionButton, ListItem } from '../../../components'
import { backArrow } from '../../../assets/images'
import { strings } from '../../../constants'
import { handleOnSharePress } from '../../../constants/functions'
import styles from './styles'

export default function AccountDetails(props) {
	const { data, navigation } = props
	const { goBack } = navigation
	// const { data } = navigation.state.params

	function handleOnCopyIBAN() {
		Clipboard.setString(data.IBAN)
		Toast.showWithGravity(strings.ibanCopied)
	}

	return (
		<View style={styles.container}>
			<HeaderView
				leftIcon={backArrow}
				title={strings.accountDetails}
				onLeftPress={() => goBack()}
			/>
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
				<ListItem label={strings.dataOpened} value={data.dataOpened} />
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

AccountDetails.defaultProps = {
	data: {
		accountName: 'Bodour Al Rafi',
		IBAN: 'SA 03 8000 0000 6080 1016 7519',
		accountNumber: '10167519',
		swiftCode: 'NBOKSAJE',
		dataOpened: '25/02/2020'
	}
}
