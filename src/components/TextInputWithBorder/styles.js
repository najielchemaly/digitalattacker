import { StyleSheet } from 'react-native'

import { variables } from '../../constants'

export default StyleSheet.create({
	container: { paddingHorizontal: variables.appMargin },
	touchableContainer: {
		paddingHorizontal: variables.textPadding
	},
	title: { marginBottom: 5, fontWeight: '600' },
	textInput: { width: '100%', height: '100%' }
})
