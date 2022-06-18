import { StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

import colors from '../../constants/colors'
import { variables } from '../../constants'

export default StyleSheet.create({
	container: {
		width: '100%',
		height: getStatusBarHeight() * 2,
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: colors.xxLightGrey,
		flexDirection: 'row',
		paddingTop: variables.appMargin
	},
	leftItems: { left: variables.appMargin },
	title: { textAlign: 'center', fontSize: 16, fontWeight: '600' },
	rightItems: { right: variables.appMargin }
})
