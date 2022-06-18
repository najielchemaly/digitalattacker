import { StyleSheet } from 'react-native'

import { colors, variables } from '../../constants'

export default StyleSheet.create({
	container: {
		borderRadius: 15,
		backgroundColor: colors.xxLightGrey,
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: variables.appMargin
	},
	text: {
		fontSize: 15,
		color: colors.brownishGrey,
		textAlign: 'center',
		paddingVertical: 5,
		paddingHorizontal: variables.textPadding
	},
	title: {
		fontWeight: '800'
	},
	subtitle: {
		fontWeight: '300'
	},
	actionButton: {
		width: '55%',
		marginTop: variables.appMargin
	}
})
