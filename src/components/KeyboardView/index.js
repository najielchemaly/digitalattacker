import React from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'

export default function KeyboardView(props) {
	const { children, style } = props
	return (
		<KeyboardAvoidingView
			style={style}
			behavior={Platform.OS === 'ios' && 'padding'}
		>
			{children}
		</KeyboardAvoidingView>
	)
}
