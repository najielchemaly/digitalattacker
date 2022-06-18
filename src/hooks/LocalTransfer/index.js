import React from 'react'

import {
	DropdownInput,
	TextInputWithBorder,
	ContentScrollView
} from '../../components'
import { appStyles } from '../../constants'
import NBKUserInput from './NBKUserInput'
import OtherBankUserInput from './OtherBankUserInput'
import styles from './styles'

export default function LocalTransferUserInput(props) {
	const { state } = props
	const transferTypes = ['Local', 'International']

	return (
		<ContentScrollView style={styles.scrollView}>
			<DropdownInput
				value={state.type}
				onValueChange={text => state.setType(text)}
				style={appStyles.fieldContainer}
				title={'Type'}
				items={transferTypes}
			/>
			<TextInputWithBorder
				value={state.iban}
				onChangeText={text => state.setIban(text)}
				style={appStyles.fieldContainer}
				title={'IBAN'}
			/>
			{state.type === transferTypes[0] && <NBKUserInput state={state} />}
			{state.type === transferTypes[1] && <OtherBankUserInput state={state} />}
		</ContentScrollView>
	)
}
