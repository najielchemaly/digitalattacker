import { StyleSheet } from 'react-native'

import { variables, colors } from '../../constants'

export default StyleSheet.create({
	container: { paddingHorizontal: variables.appMargin },
	contentView: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	title: { marginBottom: 5, fontWeight: '600' },
	icon: {
		position: 'absolute',
		right: variables.textPadding
	},
	toolbar: {
		width: '100%',
		height: 45,
		backgroundColor: colors.xxLightGrey,
		justifyContent: 'center',
		alignItems: 'flex-end'
	},
	buttonDone: { marginRight: variables.textPadding },
	doneText: { color: colors.brownishGrey, fontWeight: '500' },
	pickerView: { backgroundColor: colors.error },
	date: {
		fontSize: 14,
		fontWeight: '700',
		color: colors.brownishGrey,
		paddingHorizontal: variables.textPadding
	}
})
