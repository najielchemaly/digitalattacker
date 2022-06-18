import React from 'react'
import { ScrollView } from 'react-native'

export default function ContentScrollView(props) {
	const { children } = props
	return (
		<ScrollView
			keyboardShouldPersistTaps={'always'}
			showsHorizontalScrollIndicator={false}
			showsVerticalScrollIndicator={false}
			{...props}
		>
			{children}
		</ScrollView>
	)
}
