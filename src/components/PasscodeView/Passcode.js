import React from 'react'
import { View, Text, TextInput } from 'react-native'

import styles from './styles'

export default function Passcode(props) {
	const {
		codeLength,
		onTextChange,
		onFulfill,
		restrictToNumbers,
		onBackspace,
		value,
		cellSize,
		cellSpacing,
		placeholder,
		password,
		mask,
		autoFocus,
		cellStyle,
		cellStyleFilled,
		textStyle,
		keyboardType,
		editable,
		inputProps,
		disableFullscreenUI
	} = props

	function _inputCode(code) {
		if (restrictToNumbers) {
			code = (code.match(/[0-9]/g) || []).join('')
		}
		if (onTextChange) {
			onTextChange(code)
		}
		if (code.length === codeLength && onFulfill) {
			onFulfill(code)
		}
	}

	function _keyPress(event) {
		if (event.nativeEvent.key === 'Backspace' && value === '' && onBackspace) {
			onBackspace()
		}
	}

	return (
		<View
			style={[
				styles.inputContainer,
				{
					width: cellSize * codeLength + cellSpacing * (codeLength - 1),
					height: cellSize
				}
			]}
		>
			<View style={styles.inputView}>
				{Array.apply(null, Array(codeLength)).map((_, index) => {
					const filled = index < value.length
					const showMask = filled && password
					const isPlaceholderText = typeof placeholder === 'string'
					const isMaskText = typeof mask === 'string'
					const pinCodeChar = value.charAt(index)

					let cellText = null
					if (filled || placeholder !== null) {
						if (showMask && isMaskText) {
							cellText = mask
						} else if (!filled && isPlaceholderText) {
							cellText = placeholder
						} else if (pinCodeChar) {
							cellText = pinCodeChar
						}
					}

					const placeholderComponent = !isPlaceholderText ? placeholder : null
					const maskComponent = showMask && !isMaskText ? mask : null
					const isCellText = typeof cellText === 'string'

					return (
						<View
							key={index}
							style={[
								styles.inputSubview,
								{
									width: cellSize,
									height: cellSize,
									marginLeft: cellSpacing / 2,
									marginRight: cellSpacing / 2
								},
								cellStyle,
								filled ? cellStyleFilled : {}
							]}
						>
							{isCellText && !maskComponent && (
								<Text style={textStyle}>{cellText}</Text>
							)}

							{!isCellText && !maskComponent && placeholderComponent}
							{isCellText && maskComponent}
						</View>
					)
				})}
			</View>
			<TextInput
				disableFullscreenUI={disableFullscreenUI}
				value={value}
				onChangeText={_inputCode}
				onKeyPress={_keyPress}
				spellCheck={false}
				autoFocus={autoFocus}
				keyboardType={keyboardType}
				numberOfLines={1}
				caretHidden
				maxLength={codeLength}
				selection={{
					start: value.length,
					end: value.length
				}}
				style={styles.input}
				editable={editable}
				{...inputProps}
			/>
		</View>
	)
}

Passcode.defaultProps = {
	value: '',
	codeLength: 6,
	cellSize: 23,
	cellSpacing: 20,
	placeholder: '',
	password: false,
	mask: '',
	keyboardType: 'numeric',
	autoFocus: true,
	restrictToNumbers: true,
	cellStyle: styles.cellDefault,
	textStyle: styles.textStyleDefault,
	editable: true,
	inputProps: {},
	disableFullscreenUI: true
}
