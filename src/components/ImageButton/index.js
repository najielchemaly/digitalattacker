import React from 'react'
import { TouchableOpacity, Image, ImageBackground } from 'react-native'

export default function ImageButton(props) {
	const { source, onPress, style } = props

	return (
		<TouchableOpacity activeOpacity={0.8} onPress={onPress}>
			<Image style={style} source={source} />
		</TouchableOpacity>
	)
}
