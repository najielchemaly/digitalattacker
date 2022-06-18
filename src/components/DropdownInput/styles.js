import { StyleSheet } from 'react-native'

import { variables } from '../../constants'

export default StyleSheet.create({
	container: { paddingHorizontal: variables.appMargin },
	touchableContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	title: { marginBottom: 5, fontWeight: '600' },
	icon: {
		position: 'absolute',
		right: variables.textPadding
	}
})
