import React from 'react'
import { TouchableOpacity, Image, Text } from 'react-native'

import { checkedIcon } from '../../assets/images'
import styles from './styles'
import { strings } from '../../constants'

export default function MultiSelectListItem(props) {
	const { item, onSelectItem, showCurrency } = props
	const { image, title, selected } = item

	return (
		<TouchableOpacity
			style={styles.listItemContainer}
			activeOpacity={0.8}
			onPress={() => onSelectItem()}
		>
			{image && (
				<Image resizeMode={'contain'} style={styles.image} source={image} />
			)}
			{showCurrency && (
				<Text style={styles.currency}>{strings.localCurrency}</Text>
			)}
			<Text
				style={[
					styles.title,
					selected && styles.itemSelected,
					showCurrency && styles.amount
				]}
			>
				{title}
			</Text>
			{selected && <Image source={checkedIcon} />}
		</TouchableOpacity>
	)
}
