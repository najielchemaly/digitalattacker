import { StyleSheet } from 'react-native'

import { colors, variables } from '../../constants'

export default StyleSheet.create({
	container: {
		borderBottomWidth: 3,
		borderBottomColor: colors.brownishGrey,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginHorizontal: variables.appMargin,
		paddingBottom: 10
	},
	containerError: { borderBottomColor: colors.error },
	text: { fontSize: 22, color: colors.brownishGrey },
	textInput: {
		flex: 1,
		paddingHorizontal: 10
	},
	continue: {
		width: 40,
		height: 40
	},
	labelError: {
		fontSize: 16,
		color: colors.error,
		marginTop: 10
	}
})
