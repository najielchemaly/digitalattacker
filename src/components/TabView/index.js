import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './styles'

export default function TabView(props) {
	const { pages, style, onPress } = props

	const [selectedIndex, setSelectedIndex] = useState(0)

	function renderPages() {
		let pagesContent = []
		pages.forEach((item, index) => {
			pagesContent.push(
				<TouchableOpacity
					activeOpacity={0.8}
					key={index}
					style={[
						styles.contentView,
						selectedIndex === index && styles.contentSelected
					]}
					onPress={() => handleOnItemPress(index)}
				>
					<Text
						style={[
							styles.contentText,
							selectedIndex === index && styles.contentTextSelected
						]}
					>
						{item.title}
					</Text>
				</TouchableOpacity>
			)
		})
		return pagesContent
	}

	function handleOnItemPress(index) {
		setSelectedIndex(index)
		onPress(index)
	}

	return <View style={[styles.container, style]}>{renderPages()}</View>
}

TabView.defaultProps = {
	pages: [],
	onPress: () => {}
}
