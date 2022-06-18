import { StyleSheet } from 'react-native'

import { variables, colors } from '../../../constants'

export default StyleSheet.create({
	container: { flex: 1, backgroundColor: colors.white },
	scrollView: { flex: 1 },
	bottomView: {
		justifyContent: 'space-between',
		marginBottom: variables.actionButtonMargin
	},
	actionButton: {
		marginHorizontal: variables.appMargin,
		marginVertical: 5
	}
})
