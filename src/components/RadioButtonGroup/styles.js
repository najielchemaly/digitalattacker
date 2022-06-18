import { StyleSheet } from 'react-native'

import { colors, variables } from '../../constants'

export default StyleSheet.create({
	defaultContainer: { paddingBottom: variables.appMargin },
	horizontalContainer: { flexDirection: 'row' },
	defaultTouchableContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: variables.appMargin
	},
	verticalTouchableContainer: {
		flexDirection: 'column'
	},
	radioButton: {
		width: 16,
		height: 16,
		borderWidth: 1,
		borderRadius: 20,
		borderColor: colors.brownishGrey,
		padding: 2
	},
	radioButtonFilled: {
		aspectRatio: 1,
		borderRadius: 20,
		backgroundColor: colors.brownishGrey
	},
	title: {
		fontSize: 15,
		fontWeight: '500',
		color: colors.brownishGrey,
		paddingHorizontal: 10
	},
	children: { marginTop: variables.textPadding, marginBottom: 10 }
})
