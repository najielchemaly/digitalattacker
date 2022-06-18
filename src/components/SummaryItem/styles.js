import { StyleSheet } from 'react-native'

import { variables, colors } from '../../constants'

export default StyleSheet.create({
	container: { flex: 1, padding: variables.textPadding },
	label: {
		fontSize: 14,
		color: colors.brownishGrey,
		fontWeight: '300',
		marginBottom: 8
	},
	value: {
		fontSize: 14,
		color: colors.brownishGrey,
		fontWeight: '800'
	}
})
