import { StyleSheet } from 'react-native'

import { colors, variables } from '../../constants'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export default StyleSheet.create({
	container: { flex: 1, backgroundColor: colors.white },
	searchBar: {
		height: getStatusBarHeight() * 2,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: variables.appMargin,
		borderBottomWidth: 1,
		borderBottomColor: colors.xLightGrey,
		paddingTop: variables.appMargin
	},
	backArrow: { marginRight: 20 },
	flatList: { flex: 1 },
	separator: { width: '100%', height: 1, backgroundColor: colors.xxLightGrey },
	textInput: { flex: 1 },
	labelError: {
		fontSize: 14,
		color: colors.error,
		marginHorizontal: variables.appMargin,
		marginTop: 10
	}
})
