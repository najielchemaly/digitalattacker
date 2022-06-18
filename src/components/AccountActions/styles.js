import { StyleSheet } from 'react-native'

import { variables } from '../../constants'

export default StyleSheet.create({
	container: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		paddingVertical: variables.textPadding
	}
})
