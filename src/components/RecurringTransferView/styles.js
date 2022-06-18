import { StyleSheet } from 'react-native'

import { colors, variables } from '../../constants'

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-end',
		backgroundColor: colors.blackWithOpacity
	},
	popupView: {
		borderTopRightRadius: 30,
		borderTopLeftRadius: 30,
		backgroundColor: colors.white,
		paddingBottom: variables.appMargin * 2,
		paddingTop: variables.appMargin
	},
	title: {
		fontSize: 15,
		fontWeight: '800',
		color: colors.brownishGrey,
		textAlign: 'center',
		paddingHorizontal: variables.appMargin
	},
	closeContainer: {
		position: 'absolute',
		top: variables.appMargin,
		right: variables.textPadding
	},
	closeIcon: { width: 25, height: 25 },
	inputField: { marginTop: variables.appMargin },
	placeholder: {
		fontSize: 14,
		fontWeight: '400',
		margin: variables.appMargin
	},
	actionButton: { marginHorizontal: variables.appMargin }
})
