import { StyleSheet } from 'react-native'

import colors from '../../constants/colors'

export default StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: colors.brownishGrey,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
		borderWidth: 1,
		borderColor: colors.brownishGrey,
		height: 40
	},
	lightContainer: { backgroundColor: colors.white },
	title: {
		fontSize: 15,
		fontWeight: '600',
		color: colors.white
	},
	lightTitle: { color: colors.brownishGrey },
	icon: { marginLeft: 10, transform: [{ rotate: '180deg' }] }
})
