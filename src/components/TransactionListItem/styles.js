import { StyleSheet } from 'react-native'

import { colors, variables } from '../../constants'

export default StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: variables.textPadding,
		paddingVertical: 10
	},
	titleContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	icon: { width: 25, height: 25, marginRight: 10 },
	title: { fontSize: 14, fontWeight: '400', color: colors.brownishGrey },
	amount: { fontSize: 17, fontWeight: '400', color: colors.brownishGrey }
})
