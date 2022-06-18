import { StyleSheet, I18nManager } from 'react-native'

import { variables, colors } from '../../constants'

export default StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: variables.appMargin,
		paddingVertical: variables.textPadding
	},
	beneficiaryName: {
		textAlign: 'left',
		fontWeight: '600',
		marginBottom: 5
	},
	beneficiaryIban: {
		textAlign: 'left',
		fontWeight: '300',
		fontSize: 10
	},
	swipeViewAction: {
		width: 60,
		backgroundColor: colors.lightGrey,
		justifyContent: 'center',
		alignItems: 'center'
	},
	swipeDeleteAction: {
		width: 60,
		backgroundColor: colors.swipeDeleteGrey,
		justifyContent: 'center',
		alignItems: 'center'
	},
	rightAction: {
		flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row'
	}
})
