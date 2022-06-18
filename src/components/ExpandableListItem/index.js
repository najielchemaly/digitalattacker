import React, { useState } from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'

import styles from './styles'
import { dropdownArrow } from '../../assets/images'

export default function ExpandableListItem(props) {
	const { title, info, expandable, style } = props
	const [expanded, setExpanded] = useState(false)

	return (
		<View>
			<TouchableOpacity
				style={[styles.headerContainer, !expanded && style]}
				activeOpacity={0.8}
				disabled={!expandable}
				onPress={() => setExpanded(!expanded)}
			>
				<Text style={styles.title}>{title}</Text>
				{expandable && (
					<View style={styles.arrowContainer}>
						<Image
							style={[styles.arrowIcon, expanded && styles.arrowUp]}
							source={dropdownArrow}
						/>
					</View>
				)}
			</TouchableOpacity>
			{expanded && (
				<View style={[styles.infoContainer, style]}>
					<Text style={styles.info}>{info}</Text>
				</View>
			)}
		</View>
	)
}

ExpandableListItem.defaulProps = {
	expandable: false
}
