import React from 'react'
import { View } from 'react-native'

import { HeaderView, KeyboardView, ContentScrollView } from '../../components'
import styles from './styles'
import { strings } from '../../constants'

export default function PayAndTransfer(props) {
	return (
		<View style={styles.container}>
			<HeaderView title={strings.payAndTransfer} />
			<KeyboardView style={styles.contentView}>
				<ContentScrollView style={styles.scrollView} />
			</KeyboardView>
		</View>
	)
}
