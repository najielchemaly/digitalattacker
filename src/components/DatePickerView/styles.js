import { StyleSheet } from 'react-native'

import { colors, variables } from '../../constants'

export default StyleSheet.create({
	container: { flex: 1, justifyContent: 'flex-end' },
	overlay: {
		flex: 1,
		backgroundColor: colors.black,
		opacity: 0.8
	},
	toolbar: {
		width: '100%',
		height: 45,
		backgroundColor: colors.xxLightGrey,
		justifyContent: 'center',
		alignItems: 'flex-end'
	},
	buttonDone: { marginRight: variables.textPadding },
	pickerView: { backgroundColor: colors.white },
	doneText: { color: colors.brownishGrey, fontWeight: '500' }
})
