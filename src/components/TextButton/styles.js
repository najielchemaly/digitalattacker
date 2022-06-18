import { StyleSheet } from 'react-native'

import colors from '../../constants/colors'

export default StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 40,
		borderRadius: 20
	},
	title: {
		fontSize: 15,
		fontWeight: '600',
		color: colors.brownishGrey
	},
	lightTitle: {
		color: colors.white
	}
})
