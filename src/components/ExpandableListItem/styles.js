import { StyleSheet } from 'react-native'

import { colors, variables } from '../../constants'

export default StyleSheet.create({
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: colors.brownishGrey
	},
	title: {
		fontSize: 14,
		fontWeight: '800',
		color: colors.brownishGrey,
		padding: variables.textPadding
	},
	arrowContainer: {
		flex: 1,
		alignItems: 'flex-end',
		paddingRight: variables.textPadding
	},
	arrowIcon: { width: 15, width: 15 },
	arrowUp: { transform: [{ rotate: '180deg' }] },
	infoContainer: {
		borderBottomWidth: 1,
		borderBottomColor: colors.brownishGrey
	},
	info: {
		fontSize: 14,
		fontWeight: '500',
		color: colors.brownishGrey,
		padding: variables.textPadding
	}
})
