import { StyleSheet } from 'react-native'

import { variables, colors } from '../../constants'

export default StyleSheet.create({
	container: {
		marginHorizontal: variables.textPadding,
		backgroundColor: colors.swipeDeleteGrey,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderRadius: 10,
		padding: variables.textPadding
	},
	label: { fontSize: 14, fontWeight: '600', color: colors.white },
	balanceContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	balance: {
		fontSize: 16,
		fontWeight: '800',
		color: colors.white,
		marginRight: 5
	},
	currency: {
		fontSize: 12,
		fontWeight: '600',
		color: colors.white,
		marginTop: 5
	}
})
