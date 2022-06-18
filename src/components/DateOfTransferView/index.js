import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './styles'
import { strings, screenName } from '../../constants'
import moment from 'moment'

export default function DateOfTransferView(props) {
	const {
		navigation,
		oneOffDate,
		recurring,
		onOneOffPress,
		onRecurringPress,
		onOneOffDateChange,
		style
	} = props
	const { navigate } = navigation
	const [isOneOffSelected, setIsOneOffSelected] = useState(true)
	const [recurringData, setRecurringData] = useState({})
	const { transferDate, frequency, startDate } = recurringData

	function handleOnOneOffPress() {
		setIsOneOffSelected(true)
		onOneOffPress()
	}

	function handleOnRecurringPress() {
		setIsOneOffSelected(false)
		navigateToRecurringTransfer()
		onRecurringPress()
	}

	function navigateToRecurringTransfer() {
		navigate(screenName.recurringTransferView, {
			data: recurringData,
			onSetupPress: data => setRecurringData({ ...recurringData, ...data })
		})
	}

	function renderOneOffView() {
		const transfDate = transferDate || moment(new Date()).format('DD MMMM YYYY')

		return (
			<View
				style={[styles.onOffContainer, !isOneOffSelected && { opacity: 0.8 }]}
			>
				<View style={styles.flexRow}>
					<TouchableOpacity
						activeOpacity={0.8}
						style={styles.radioView}
						onPress={() => handleOnOneOffPress()}
					>
						{isOneOffSelected && <View style={styles.radioButton}></View>}
					</TouchableOpacity>
					<View>
						<Text style={styles.title}>{strings.oneOff}</Text>
						<Text style={styles.value}>{transfDate}</Text>
					</View>
				</View>
				<TouchableOpacity
					disabled={!isOneOffSelected}
					activeOpacity={0.8}
					onPress={() => openDatePicker()}
				>
					<Text style={styles.textButton}>{strings.changeDate}</Text>
				</TouchableOpacity>
			</View>
		)
	}

	function renderRecurringView() {
		const recurringValue = frequency
			? `${frequency}, from ${startDate}`
			: recurring

		return (
			<View
				style={[
					styles.recurringContainer,
					isOneOffSelected && { opacity: 0.8 }
				]}
			>
				<View style={styles.flexRow}>
					<TouchableOpacity
						activeOpacity={0.8}
						style={styles.radioView}
						onPress={() => handleOnRecurringPress()}
					>
						{!isOneOffSelected && <View style={styles.radioButton}></View>}
					</TouchableOpacity>
					<View>
						<Text style={styles.title}>{strings.recurring}</Text>
						<Text style={styles.value}>{recurringValue}</Text>
					</View>
				</View>
				<TouchableOpacity
					disabled={isOneOffSelected}
					activeOpacity={0.8}
					onPress={() => navigateToRecurringTransfer()}
				>
					<Text style={styles.textButton}>{strings.edit}</Text>
				</TouchableOpacity>
			</View>
		)
	}

	function openDatePicker() {
		const { navigate } = navigation

		navigate(screenName.datePickerView, {
			showOverlay: true,
			value: transferDate ? new Date(transferDate) : oneOffDate,
			minDate: new Date(),
			onDateChange: date => {
				setRecurringData({ ...recurringData, transferDate: date })
				onOneOffDateChange(date)
			}
		})
	}

	return (
		<View style={[styles.container, style]}>
			<Text style={styles.title}>{strings.typeOfTransfer}</Text>
			<View style={styles.contentView}>
				{renderOneOffView()}
				{renderRecurringView()}
			</View>
		</View>
	)
}

DateOfTransferView.defaultProps = {
	oneOffDate: new Date(),
	recurring: strings.recurringPlaceholder,
	onOneOffPress: () => {},
	onRecurringPress: () => {},
	onOneOffDateChange: text => {},
	mode: 'date'
}
