import React from 'react'
import { View } from 'react-native'

import { HeaderView, KeyboardView, ContentScrollView } from '../../components'
import styles from './styles'
import { strings } from '../../constants'

export default function MoneyCoach(props) {
	return (
		<View style={styles.container}>
			<HeaderView title={strings.moneyCoach} />
			<KeyboardView style={styles.contentView}>
				<ContentScrollView style={styles.scrollView} />
			</KeyboardView>
		</View>
	)
}
