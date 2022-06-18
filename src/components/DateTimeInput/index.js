import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'

import { appStyles } from '../../constants/'
import { calendarIcon } from '../../assets/images'
import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DatePickerView } from '..'

export default function DateTimeInput(props) {
	const {
		title,
		style,
		errorMessage,
		disabled,
		value,
		minDate,
		maxDate,
		onDateChange,
		valid
	} = props
	const [isValid, setIsValid] = useState(true)
	const [showDatePicker, setShowDatePicker] = useState(false)
	const [date, setDate] = useState('')
	const showError = !isValid || !valid

	function handleOnDateChange(text) {
		setDate(text)
		setIsValid(true)
		onDateChange && onDateChange(text)
	}

	return (
		<View
			pointerEvents={disabled && 'none'}
			style={[styles.container, disabled && appStyles.disabled, style]}
		>
			<Text style={[styles.title, showError && appStyles.error]}>{title}</Text>
			<TouchableOpacity
				onPress={() => setShowDatePicker(true)}
				style={[
					styles.contentView,
					appStyles.fieldBox,
					showError && appStyles.error
				]}
			>
				<Text style={styles.date}>{date || value}</Text>
				<Image style={styles.icon} source={calendarIcon} />
			</TouchableOpacity>
			{showError && <Text style={[appStyles.errorLabel]}>{errorMessage}</Text>}
			{showDatePicker && (
				<DatePickerView
					value={date ? new Date(date) : new Date()}
					minDate={minDate}
					maxDate={maxDate}
					onDateChange={text => handleOnDateChange(text)}
					onDonePress={() => setShowDatePicker(false)}
				/>
			)}
		</View>
	)
}

DateTimeInput.defaultProps = {
	valid: true,
	onDateChange: date => {}
}
