import { StyleSheet } from 'react-native'

import { colors, variables } from '../../constants'

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.xxLightGrey,
		marginTop: variables.textPadding
	},
	contentView: { flex: 1, margin: variables.appMargin },
	imageView: {
		borderRadius: 10,
		backgroundColor: colors.lightGrey,
		height: '55%'
	},
	title: {
		fontSize: 24,
		fontWeight: '700',
		color: colors.brownishGrey,
		marginTop: variables.appMargin,
		marginBottom: variables.textPadding
	},
	description: {
		fontSize: 18,
		fontWeight: '400',
		color: colors.brownishGrey
	},
	actionButton: {
		marginHorizontal: variables.appMargin,
		marginBottom: variables.appMargin,
		marginTop: variables.textPadding
	},
	activeDot: {
		backgroundColor: colors.swipeDeleteGrey
	}
})
