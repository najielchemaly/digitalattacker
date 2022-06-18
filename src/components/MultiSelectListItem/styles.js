import { StyleSheet } from 'react-native'

import { variables, colors } from '../../constants'

export default StyleSheet.create({
	listItemContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 20
	},
	image: { width: 30, height: 25 },
	title: {
		flex: 1,
		fontSize: 22,
		color: colors.black,
		fontWeight: '700',
		paddingHorizontal: variables.textPadding,
		opacity: 0.6
	},
	amount: { paddingLeft: 5 },
	itemSelected: { opacity: 1 },
	currency: {
		fontSize: 16,
		fontWeight: '700',
		color: colors.brownishGrey,
		textTransform: 'uppercase',
		alignSelf: 'flex-end',
		marginBottom: 2
	}
})
