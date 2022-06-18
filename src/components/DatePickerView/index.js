import React, { createRef } from 'react'
import { Modal, View, TouchableOpacity, Text } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'

import styles from './styles'
import { strings } from '../../constants'

export default function DatePickerView(props) {
	const { navigation } = props
	const params = navigation ? navigation.state.params : props
	const {
		value,
		mode,
		minDate,
		maxDate,
		onDateChange,
		showOverlay,
		onDonePress
	} = params

	function handleOnDateChange(date) {
		const formattedDate = moment(date).format('DD MMMM YYYY')
		onDateChange(formattedDate)
	}

	function handleOnDonePress() {
		handleOnDateChange(value || minDate || new Date())
		navigation && navigation.goBack()
		onDonePress && onDonePress()
	}

	return (
		<Modal animationType={'fade'} transparent>
			<View style={styles.container}>
				{showOverlay && <View style={styles.overlay} />}
				<View style={styles.toolbar}>
					<TouchableOpacity
						style={styles.buttonDone}
						activeOpacity={0.8}
						onPress={() => handleOnDonePress()}
					>
						<Text style={styles.doneText}>{strings.done}</Text>
					</TouchableOpacity>
				</View>
				<DateTimePicker
					minimumDate={minDate}
					maximumDate={maxDate}
					style={styles.pickerView}
					value={value || minDate || new Date()}
					mode={mode}
					onChange={(event, date) => handleOnDateChange(date)}
					is24Hour
				/>
			</View>
		</Modal>
	)
}

DatePickerView.defaultProps = {
	value: null,
	mode: 'date',
	minDate: null,
	maxDate: null,
	onDateChange: date => {},
	onDonePress: date => {},
	showOverlay: false
}
