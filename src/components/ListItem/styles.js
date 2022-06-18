import { StyleSheet } from 'react-native'

import { colors, variables } from '../../constants'

export default StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: variables.appMargin
	},
	label: { fontSize: 14, fontWeight: '500', color: colors.brownishGrey },
	value: {
		fontSize: 12,
		fontWeight: '300',
		color: colors.brownishGrey
	}
})
