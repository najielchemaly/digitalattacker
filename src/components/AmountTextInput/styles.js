import { StyleSheet } from 'react-native'

import { variables, colors } from '../../constants'

export default StyleSheet.create({
	container: { paddingHorizontal: variables.appMargin },
	title: { marginBottom: 5, fontWeight: '600' },
	contentView: {
		borderRadius: 7,
		borderColor: colors.lightGrey,
		borderWidth: 1
	},
	textInput: {
		width: '100%',
		height: 55,
		paddingHorizontal: variables.textPadding
	},
	detailView: {
		padding: variables.textPadding,
		backgroundColor: colors.xLightGrey,
		borderTopColor: colors.lightGrey,
		borderTopWidth: 1
	},
	rowItem: { flexDirection: 'row' },
	rowItemWithMargin: { flexDirection: 'row', marginVertical: 10 },
	label: {
		fontSize: 11,
		fontWeight: '400',
		color: colors.brownishGrey,
		marginRight: 5
	},
	value: {
		fontSize: 11,
		fontWeight: '700',
		color: colors.brownishGrey
	}
})
