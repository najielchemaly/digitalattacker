import React from 'react'
import { View } from 'react-native'

import { TextInputWithBorder } from '../../../components'
import { appStyles } from '../../../constants'
import styles from './styles'

export default function NBKUserInput(props) {
	const { state } = props
	return (
		<View>
			<TextInputWithBorder
				onChangeText={text => state.setBankName(text)}
				style={appStyles.fieldContainer}
				value={state.bankName}
				title={'Bank Name'}
				disabled
			/>
			<TextInputWithBorder
				onChangeText={text => state.setBeneficiaryFirstName(text)}
				style={appStyles.fieldContainer}
				value={state.beneficiaryFirstName}
				title={'Beneficiary Name'}
				placeholder={'First Name'}
			/>
			<TextInputWithBorder
				onChangeText={text => state.setBeneficiaryMiddleName(text)}
				style={styles.beneficiaryNameField}
				value={state.beneficiaryMiddleName}
				placeholder={'Middle Name'}
			/>
			<TextInputWithBorder
				onChangeText={text => state.setBeneficiaryLastName(text)}
				style={styles.beneficiaryNameField}
				value={state.beneficiaryLastName}
				placeholder={'Last Name'}
			/>
			<TextInputWithBorder
				onChangeText={text => state.setBeneficiaryNickname(text)}
				style={appStyles.fieldContainer}
				value={state.beneficiaryNickname}
				title={'Beneficiary Nickname'}
				optional
			/>
			<TextInputWithBorder
				onChangeText={text => state.setBeneficiaryAddress(text)}
				style={appStyles.fieldContainer}
				value={state.beneficiaryAddress}
				title={'Beneficiary Address'}
				keyboardType={'email-address'}
			/>
		</View>
	)
}
