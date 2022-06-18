import React, { useState } from 'react'
import { Modal, View, TouchableOpacity, Text, Image } from 'react-native'

import styles from './styles'
import { strings } from '../../constants'
import { closeIcon } from '../../assets/images'
import { DropdownInput, ActionButton } from '..'
import DateTimeInput from '../DateTimeInput'

export default function RecurringTransferView(props) {
	const { navigation } = props
	const { goBack } = navigation
	const { params } = navigation.state
	const { onSetupPress, data } = params || props.params
	const [recurringData, setRecurringData] = useState(data)
	const {
		frequency,
		frequencyValid,
		startDate,
		startDateValid,
		endDate,
		endDateValid
	} = recurringData

	const frequencies = ['Daily', 'Weekly', 'Monthly']

	function handleOnSetupPress() {
		setRecurringData({
			...recurringData,
			frequencyValid: frequency !== '',
			startDateValid: startDate !== '',
			endDateValid: endDate !== ''
		})

		if (frequency && startDate && endDate) {
			onSetupPress(recurringData)
			goBack()
		}
	}

	return (
		<Modal animationType={'fade'} transparent>
			<View style={styles.container}>
				<View style={styles.popupView}>
					<Text style={styles.title}>{strings.recurrency}</Text>
					<TouchableOpacity
						style={styles.closeContainer}
						activeOpacity={0.8}
						onPress={() => goBack()}
					>
						<Image style={styles.closeIcon} source={closeIcon} />
					</TouchableOpacity>
					<DropdownInput
						items={frequencies}
						title={strings.frequency}
						style={styles.inputField}
						value={frequency}
						valid={frequencyValid}
						errorMessage={strings.frequencyEmpty}
						onValueChange={value =>
							setRecurringData({ ...recurringData, frequency: value })
						}
					/>
					<DateTimeInput
						style={styles.inputField}
						title={strings.startDate}
						value={startDate}
						valid={startDateValid}
						errorMessage={strings.startDateEmpty}
						minDate={new Date()}
						onDateChange={date =>
							setRecurringData({ ...recurringData, startDate: date })
						}
					/>
					<DateTimeInput
						style={styles.inputField}
						title={strings.endDate}
						value={endDate}
						valid={endDateValid}
						errorMessage={strings.endDateEmpty}
						minDate={startDate && new Date(startDate)}
						onDateChange={date =>
							setRecurringData({ ...recurringData, endDate: date })
						}
					/>
					<Text style={styles.placeholder}>
						{strings.recurrencyPlaceholder}
					</Text>
					<ActionButton
						style={styles.actionButton}
						title={strings.setupRecurringTransfer}
						onPress={() => handleOnSetupPress()}
					/>
				</View>
			</View>
		</Modal>
	)
}

RecurringTransferView.defaultProps = {
	params: {
		data: {
			frequency: '',
			frequencyValid: true,
			startDate: '',
			startDateValid: true,
			endDate: '',
			endDateValid: true
		},
		onSetupPress: data => {}
	}
}
