import { StyleSheet } from 'react-native'

import { variables, colors } from '../../constants'

export default StyleSheet.create({
	container: { flex: 1, backgroundColor: colors.white },
	contentView: {
		flex: 1,
		justifyContent: 'space-between'
	},
	scrollView: { marginBottom: variables.appMargin },
	accountBalance: {
		fontSize: 14,
		fontWeight: '400',
		padding: variables.appMargin,
		color: colors.brownishGrey
	},
	actionButton: {
		marginHorizontal: variables.appMargin,
		marginBottom: variables.actionButtonMargin
	},
	toggleView: { marginTop: variables.textPadding }
})
