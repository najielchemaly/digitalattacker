import React from 'react'
import { View } from 'react-native'

import styles from './styles'
import { backArrow, editIcon } from '../../../assets/images'
import {
	HeaderView,
	SummaryItem,
	ActionButton,
	TextButton,
	ContentScrollView,
} from '../../../components'
import { screenName, strings } from '../../../constants'
import { showDeleteBeneficiaryAlert } from '../../../constants/functions'

export default function ViewBeneficiary(props) {
	const { navigation, data } = props
	const { navigate, goBack } = navigation

	return (
		<View style={styles.container}>
			<HeaderView
				leftIcon={backArrow}
				onLeftPress={() => goBack(screenName.beneficiaryList)}
				title={data.beneficiaryNickname}
				// rightIcon={editIcon}
				// onRightPress={() => navigate(screenName.editBeneficiary)}
			/>
			<ContentScrollView style={styles.scrollView}>
				<SummaryItem
					label={strings.beneficiaryFullname}
					value={data.beneficiaryName}
				/>
				<SummaryItem
					label={strings.beneficiaryNickname}
					value={data.beneficiaryNickname}
				/>
				<SummaryItem label={strings.iban} value={data.Iban} />
				<SummaryItem label={strings.bankName} value={data.bankName} />
				<SummaryItem
					label={strings.beneficiaryAddress}
					value={data.beneficiaryAddress}
				/>
			</ContentScrollView>
			<View style={styles.bottomView}>
				<ActionButton
					style={styles.actionButton}
					title={strings.editBeneficiary}
					onPress={() => navigate(screenName.editBeneficiary, { data })}
				/>
				<TextButton
					style={styles.actionButton}
					title={strings.deleteBeneficiary}
					onPress={() =>
						showDeleteBeneficiaryAlert(navigation, data.beneficiaryName)
					}
				/>
			</View>
		</View>
	)
}

ViewBeneficiary.defaultProps = {
	data: {
		beneficiaryName: 'Michal Peter Orwinski',
		beneficiaryNickname: 'Michal Other Bank',
		Iban: 'SA03 80000 0000 6080 1016 7519',
		bankName: 'AL RAJHI BANK',
		beneficiaryAddress: 'Akaria 3 Olaya Main Street, Riyadh',
	},
}
