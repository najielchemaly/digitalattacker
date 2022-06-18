import { StyleSheet } from 'react-native'

import { colors, variables } from '../../constants'

export default StyleSheet.create({
	container: {
		borderWidth: 2,
		borderColor: colors.lightGrey,
		borderRadius: 5,
		marginHorizontal: variables.textPadding,
		marginBottom: variables.appMargin
	},
	contentView: {
		paddingHorizontal: variables.textPadding,
		paddingTop: variables.textPadding
	},
	dropdownView: {
		borderWidth: 0,
		borderBottomWidth: 2,
		borderBottomColor: colors.black
	},
	deleteButton: {
		borderTopWidth: 1,
		borderTopColor: colors.brownishGrey,
		borderRadius: 0,
		height: 50
	},
	deleteButtonTitle: {
		fontSize: 18,
		fontWeight: '400',
		textDecorationLine: 'underline',
		lineHeight: 30
	},
	taxInput: {
		borderBottomWidth: 2,
		borderBottomColor: colors.black,
		paddingBottom: 10,
		color: colors.brownishGrey,
		fontWeight: '400',
		fontSize: 25
	}
})
