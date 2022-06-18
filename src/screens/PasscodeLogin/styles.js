import { StyleSheet } from 'react-native'

import { colors, variables } from '../../constants'

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.xxLightGrey,
		paddingTop: variables.textPadding
	},
	contentView: {
		flex: 1,
		justifyContent: 'center'
	},
	title: {
		width: '100%',
		fontSize: 22,
		fontWeight: '600',
		color: colors.brownishGrey,
		textAlign: 'left',
		marginBottom: variables.appMargin * 2,
		paddingHorizontal: variables.appMargin
	},
	forgotPasscode: {
		alignSelf: 'flex-start',
		marginLeft: variables.appMargin,
		marginBottom: 10
	}
})
