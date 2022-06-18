import { StyleSheet } from 'react-native'

import { variables, colors } from '../../constants'

export default StyleSheet.create({
	container: { paddingHorizontal: variables.appMargin },
	contentView: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 10
	},
	image: { width: 30, height: 30 },
	title: { marginBottom: 5, fontWeight: '600' },
	value: { width: '100%', marginLeft: 10, fontWeight: '600' },
	imagePlaceholder: {
		width: 30,
		height: 30,
		backgroundColor: colors.lightGrey,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 20
	},
	imageTitle: {
		fontSize: 12,
		fontWeight: '400',
		color: colors.white,
		letterSpacing: -1
	}
})
