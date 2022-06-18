import { StyleSheet } from 'react-native'

import { colors, variables } from '../../constants'

export default StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: colors.lightGrey,
		borderRadius: 10,
		alignSelf: 'center',
		padding: 1
	},
	switchContainer: {
		borderRadius: 10,
		backgroundColor: colors.white,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: variables.textPadding,
		paddingVertical: 12
	},
	switchText: {
		fontSize: 16,
		color: colors.brownishGrey,
		textTransform: 'uppercase'
	}
})
