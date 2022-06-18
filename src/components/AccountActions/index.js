import React from 'react'
import { View } from 'react-native'

import styles from './styles'

export default function AccountActions(props) {
	const { children, style } = props
	return <View style={[styles.container, style]}>{children}</View>
}
