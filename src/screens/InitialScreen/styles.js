import { StyleSheet } from 'react-native'

import { colors, variables } from '../../constants'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
		paddingHorizontal: variables.appMargin,
		paddingTop: getStatusBarHeight(),
		paddingBottom: variables.appMargin,
		justifyContent: 'space-between',
	},
	title: {
		fontSize: 28,
		fontWeight: '800',
		color: colors.brownishGrey,
		margin: variables.appMargin,
		textAlign: 'center',
	},
	videoView: {
		backgroundColor: colors.xxLightGrey,
		borderRadius: 10,
		width: '100%',
		height: '60%',
	},
	languageToggle: { marginTop: variables.appMargin },
	actionButton: { marginBottom: variables.textPadding },
})
