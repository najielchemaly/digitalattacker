import { StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

import { colors, variables } from '../../constants'

export default StyleSheet.create({
	container: { flex: 1, backgroundColor: colors.xxLightGrey },
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: variables.textPadding,
		marginTop: getStatusBarHeight() + variables.textPadding,
		marginBottom: variables.appMargin,
	},
	title: {
		fontSize: 24,
		fontWeight: '800',
		color: colors.brownishGrey,
		marginBottom: 5,
	},
	date: { fontSize: 10, fontWeight: '500', color: colors.brownishGrey },
	iconContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	icon: { width: 35, height: 35, marginLeft: variables.textPadding },
	accountActions: { marginTop: variables.textPadding },
	feedView: {
		flex: 1,
		paddingHorizontal: variables.textPadding,
		backgroundColor: colors.white,
		borderTopRightRadius: variables.textPadding,
		borderTopLeftRadius: variables.textPadding,
		marginTop: 50,
	},
	cardViewContainer: { paddingVertical: variables.appMargin },
	cardView: {
		backgroundColor: colors.xxLightGrey,
		marginBottom: variables.textPadding,
	},
})
