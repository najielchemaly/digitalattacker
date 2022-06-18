import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'
import { HeaderView, ContentScrollView } from '../../components'
import { closeIcon } from '../../assets/images'

export default function ContentView(props) {
	const { navigation } = props
	const { goBack } = navigation
	const { title, info } = navigation.state.params

	return (
		<View style={styles.container}>
			<HeaderView
				style={styles.headerView}
				rightIcon={closeIcon}
				onRightPress={() => goBack()}
			/>
			<ContentScrollView style={styles.contentView}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.info}>{info}</Text>
			</ContentScrollView>
		</View>
	)
}
