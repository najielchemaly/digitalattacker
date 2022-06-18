import { StyleSheet } from 'react-native'

import { colors } from '../../constants'

export default StyleSheet.create({
	container: { flexDirection: 'row', alignItems: 'center' },
	checkboxContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: colors.brownishGrey,
		borderRadius: 2,
		borderWidth: 2,
		width: 18,
		height: 18
	},
	checkboxIcon: {
		width: 12,
		height: 12
	},
	textContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	text: {
		fontSize: 12,
		fontWeight: '400',
		color: colors.brownishGrey,
		marginLeft: 10,
		marginRight: 3
	},
	textClickable: {
		fontSize: 12,
		fontWeight: '600',
		color: colors.brownishGrey,
		textDecorationLine: 'underline'
	}
})
