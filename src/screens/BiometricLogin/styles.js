import { StyleSheet } from 'react-native'

import { colors, variables } from '../../constants'

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.xxLightGrey,
		justifyContent: 'space-between',
		marginTop: variables.textPadding
	},
	contentView: {
		marginHorizontal: variables.appMargin
	},
	icon: { height: 60, aspectRatio: 1 },
	title: {
		fontSize: 24,
		fontWeight: '600',
		color: colors.brownishGrey,
		paddingVertical: variables.appMargin
	},
	bottomView: { marginHorizontal: variables.appMargin, marginTop: '50%' },
	textButton: { marginTop: 10, marginBottom: variables.appMargin }
})
