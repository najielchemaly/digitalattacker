import { StyleSheet, I18nManager } from 'react-native'

import { variables, colors } from '../../constants'

export default StyleSheet.create({
	container: {
		justifyContent: 'center',
		marginHorizontal: 30
	},
	contentView: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	maskView: {
		width: 23,
		aspectRatio: 1,
		borderRadius: 20,
		backgroundColor: '#c4c4c4'
	},
	icon: { height: 30, aspectRatio: 3 / 2 },
	cellDefault: {
		borderColor: '#5c5c5c',
		borderWidth: 2,
		borderRadius: 20
	},
	cellStyleFilled: { borderWidth: 0 },
	textStyleDefault: {
		color: '#5c5c5c',
		fontSize: 22,
		fontWeight: 'bold'
	},
	inputContainer: {
		alignItems: 'stretch',
		flexDirection: 'row',
		justifyContent: 'center',
		position: 'relative'
	},
	inputView: {
		position: 'absolute',
		flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
		alignItems: 'center'
	},
	inputSubview: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	input: {
		flex: 1,
		opacity: 0,
		textAlign: 'center'
	},
	labelError: {
		fontSize: 16,
		color: colors.error,
		marginTop: 10
	}
})
