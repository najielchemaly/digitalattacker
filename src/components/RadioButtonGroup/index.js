import React, { useState } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

import styles from './styles'

export default function RadioButtonGroup(props) {
	const { items, orientation } = props
	const [selectedItem, setSelectedItem] = useState()

	function renderRadioButtons() {
		return items.map((item, index) => {
			return (
				<View key={item + index}>
					<TouchableOpacity
						activeOpacity={0.8}
						style={[
							styles.defaultTouchableContainer,
							orientation === 'horizontal' && styles.verticalTouchableContainer
						]}
						onPress={() => setSelectedItem(item)}
					>
						<View style={styles.radioButton}>
							{selectedItem === item && (
								<View style={styles.radioButtonFilled} />
							)}
						</View>
						<Text style={styles.title}>{item.title}</Text>
					</TouchableOpacity>
					{selectedItem === item && item.children && (
						<View style={styles.children}>{item.children}</View>
					)}
				</View>
			)
		})
	}

	return (
		<View
			style={[
				styles.defaultContainer,
				orientation === 'horizontal' && styles.horizontalContainer
			]}
		>
			{renderRadioButtons()}
		</View>
	)
}

RadioButtonGroup.defaultProps = {
	items: [],
	orientation: 'vertical'
}
