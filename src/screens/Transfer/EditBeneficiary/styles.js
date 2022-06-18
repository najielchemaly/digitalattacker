import { StyleSheet } from 'react-native'

import { variables, colors } from '../../../constants'

export default StyleSheet.create({
	container: { flex: 1, backgroundColor: colors.white },
	contentView: { flex: 1, justifyContent: 'space-between' },
	saveButton: { marginHorizontal: variables.appMargin },
	cancelButton: {
		marginHorizontal: variables.appMargin,
		marginTop: 10,
		marginBottom: variables.actionButtonMargin
	}
})
