import { StyleSheet } from 'react-native'

import { colors, variables } from '../../constants'

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.xxLightGrey,
		marginTop: variables.textPadding
	},
	contentView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: variables.appMargin
	},
	title: {
		width: '100%',
		fontSize: 22,
		fontWeight: '600',
		color: colors.brownishGrey,
		textAlign: 'left',
		paddingVertical: variables.textPadding
	},
	phoneNumberView: { marginTop: variables.appMargin, width: '100%' }
})
