import { StyleSheet } from 'react-native'

import { variables, colors } from '../../constants'

export default StyleSheet.create({
	container: {
		marginHorizontal: variables.textPadding,
		backgroundColor: colors.swipeDeleteGrey,
		padding: variables.textPadding,
		borderRadius: 15
	},
	label: { fontSize: 15, fontWeight: '600', color: colors.white },
	balanceContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: variables.textPadding
	},
	balance: {
		fontSize: 26,
		fontWeight: '800',
		color: colors.white,
		marginRight: 5
	},
	currency: {
		fontSize: 13,
		fontWeight: '600',
		color: colors.white,
		marginTop: 5
	},
	actionButton: {
		minWidth: '50%',
		alignSelf: 'baseline',
		backgroundColor: colors.lightGrey,
		borderColor: colors.lightGrey,
		height: 35
	}
})
