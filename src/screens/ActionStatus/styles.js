import { StyleSheet } from 'react-native'

import { variables, colors } from '../../constants'

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		backgroundColor: colors.black,
		opacity: 0.8
	},
	contentView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: variables.appMargin
	},
	title: {
		color: 'white',
		fontSize: 25,
		fontWeight: '600',
		textAlign: 'center',
		paddingVertical: variables.appMargin,
		paddingHorizontal: 50
	},
	bottomView: {
		justifyContent: 'space-between',
		marginBottom: variables.appMargin
	},
	actionButton: {
		marginHorizontal: variables.appMargin,
		marginVertical: 5
	}
})
