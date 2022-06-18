import { StyleSheet } from 'react-native'

import { colors, variables } from '../../constants'

export default StyleSheet.create({
	container: { flex: 1, backgroundColor: colors.white },
	headerView: { backgroundColor: colors.white },
	contentView: { flex: 1, paddingHorizontal: variables.appMargin },
	title: {
		fontSize: 25,
		fontWeight: '700',
		color: colors.brownishGrey,
		paddingRight: variables.textPadding
	},
	info: {
		fontSize: 20,
		fontWeight: '400',
		color: colors.brownishGrey,
		paddingVertical: variables.appMargin
	}
})
