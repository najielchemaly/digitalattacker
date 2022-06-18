import React from 'react'
import { View } from 'react-native'

import {
	HeaderView,
	SummaryItem,
	ActionButton,
	ContentScrollView
} from '../../../components'
import { backArrow } from '../../../assets/images'
import styles from './styles'
import { screenName, strings } from '../../../constants'

export default function TransferSummary(props) {
	const { navigation, data } = props
	const { navigate, goBack } = navigation
	// const { data } = navigation.state.params TODO

	function handleOnConfirAndTransferPress() {
		navigate(screenName.otpVerification, {
			title: strings.enterOTP,
			message: `${strings.weSentCode} +966 123 45678`,
			onSubmit: () => {
				navigate(screenName.actionStatus, {
					message: `${strings.successful}\n${data.amount} ${strings.sentTo} ${data.toAccount}`,
					isSuccess: true,
					primaryButtonTitle: strings.done,
					onPrimaryButtonPress: () => navigate(screenName.beneficiaryList),
					secondaryButtonTitle: strings.makeAnotherTransfer,
					onSecondaryButtonPress: () => {}
				})
			}
		})
	}

	return (
		<View style={styles.container}>
			<HeaderView
				leftIcon={backArrow}
				title={strings.transfer}
				onLeftPress={() => goBack()}
			/>
			<ContentScrollView style={styles.scrollView}>
				<SummaryItem label={strings.toAccount} value={data.toAccount} />
				<SummaryItem label={strings.fromAccount} value={data.fromAccount} />
				<SummaryItem label={strings.amount} value={data.amount} />
				<SummaryItem
					label={strings.transactionFee}
					value={data.transactionFee}
				/>
				<SummaryItem label={strings.vatPercentage} value={data.vat} />
				<SummaryItem label={strings.purpose} value={data.purpose} />
				<SummaryItem
					label={strings.purposeDetails}
					value={data.purposeDetails}
				/>
				<SummaryItem label={strings.valueDate} value={data.valueDate} />
				<SummaryItem
					label={strings.transactionDate}
					value={data.transactionDate}
				/>
			</ContentScrollView>
			<ActionButton
				style={styles.actionButton}
				title={strings.confirmAndTransfer}
				onPress={handleOnConfirAndTransferPress}
			/>
		</View>
	)
}

TransferSummary.defaultProps = {
	onConfirmPress: () => {},
	data: {
		toAccount: 'Michal Peter Orwinski',
		fromAccount: 'Current Account SA03 8000 0000 6080 1016 7511',
		amount: '1,000 SAR',
		transactionFee: '20 SAR',
		vat: '1 SAR',
		purpose: 'Personal',
		purposeDetails: 'Medicines',
		valueDate: '19th February 2020',
		transactionDate: '20th February 2020'
	}
}
