import { StyleSheet } from 'react-native'

import { variables, colors } from '../../../constants'

export default StyleSheet.create({
	container: { flex: 1, backgroundColor: colors.white },
	title: {
		fontSize: 18,
		color: colors.black,
		padding: variables.appMargin
	},
	contentView: { flex: 1, marginHorizontal: variables.appMargin },
	actionButton: {
		marginHorizontal: variables.appMargin,
		marginBottom: variables.actionButtonMargin
	}
})
