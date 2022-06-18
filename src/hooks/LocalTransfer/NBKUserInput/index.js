import React from 'react'
import { View } from 'react-native'

import { TextInputWithBorder } from '../../../components'
import { appStyles } from '../../../constants'

export default function NBKUserInput(props) {
	const { state } = props
	return (
		<View>
			<TextInputWithBorder
				onChangeText={text => state.setBeneficiaryName(text)}
				style={appStyles.fieldContainer}
				value={state.beneficiaryName}
				title={'Beneficiary Name'}
				// disabled
			/>
			<TextInputWithBorder
				onChangeText={text => state.setBeneficiaryNickname(text)}
				style={appStyles.fieldContainer}
				value={state.beneficiaryNickname}
				title={'Beneficiary Nickname'}
				optional
			/>
		</View>
	)
}
