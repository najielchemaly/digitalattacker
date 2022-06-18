import { StyleSheet } from 'react-native'

import { variables } from '../../constants'

export default StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: variables.appMargin
	},
	title: { fontSize: 18, textAlign: 'left' }
})
