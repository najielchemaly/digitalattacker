import { StyleSheet } from 'react-native'

import { colors, variables } from '../../constants'

export default StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: colors.white,
		paddingHorizontal: variables.textPadding,
		paddingTop: variables.textPadding,
		paddingBottom: 10
	},
	date: { fontSize: 12, fontWeight: '400', color: colors.brownishGrey },
	totalAmount: { fontSize: 12, fontWeight: '200', color: colors.brownishGrey }
})
