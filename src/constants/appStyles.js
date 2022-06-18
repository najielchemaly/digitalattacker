import { StyleSheet } from 'react-native'

import { colors } from '.'

export default StyleSheet.create({
	fieldBox: {
		borderRadius: 7,
		borderColor: colors.lightGrey,
		borderWidth: 1,
		height: 55
	},
	errorLabel: {
		fontSize: 12,
		fontWeight: '600',
		color: colors.error,
		marginTop: 5
	},
	error: { color: colors.error, borderColor: colors.error },
	fieldContainer: { marginTop: 30 },
	disabled: { opacity: 0.5 },
	separator: { borderBottomColor: colors.lightGrey, borderBottomWidth: 1 }
})
