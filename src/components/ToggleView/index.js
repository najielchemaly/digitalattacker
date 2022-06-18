import React, { useState } from 'react'
import { View, Text, Switch } from 'react-native'

import styles from './styles'

export default function ToggleView(props) {
	const { title, style, onValueChange } = props
	const [value, setValue] = useState(false)

	return (
		<View style={[styles.container, style]}>
			<Text style={styles.title}>{title}</Text>
			<Switch
				value={value}
				onValueChange={value => {
					setValue(value)
					onValueChange(value)
				}}
			/>
		</View>
	)
}

ToggleView.defaultProps = {
	onValueChange: value => {}
}
