import { StyleSheet } from 'react-native'

import { colors, variables } from '../../constants'

export default StyleSheet.create({
	touchableContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 50
	},
	icon: { width: 20 },
	textInput: {
		fontSize: 25,
		fontWeight: '400',
		color: colors.brownishGrey,
		marginLeft: variables.textPadding
	}
})
