import { StyleSheet } from 'react-native'

import { colors } from '../../constants'

export default StyleSheet.create({
	container: { alignSelf: 'center' },
	pincodeContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	cell: {
		borderBottomWidth: 3,
		borderColor: colors.brownishGrey
	},
	cellError: { borderColor: colors.error },
	cellFocused: {
		borderColor: colors.black
	},
	labelError: {
		fontSize: 16,
		color: colors.error,
		marginTop: -5
	},
	continue: {
		marginLeft: 10,
		marginBottom: 30
	}
})
