import { StyleSheet, Dimensions } from 'react-native'

import { colors, variables } from '../../constants'

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	overlay: {
		width: '100%',
		height: '100%',
		backgroundColor: colors.black,
		position: 'absolute',
		opacity: 0.8,
	},
	popupView: {
		borderRadius: 10,
		backgroundColor: colors.white,
		padding: variables.textPadding,
		marginHorizontal: variables.textPadding,
	},
	title: {
		fontSize: 25,
		fontWeight: '600',
		textAlign: 'center',
		paddingHorizontal: variables.textPadding,
		paddingBottom: 10,
	},
	message: {
		fontSize: 16,
		fontWeight: '300',
		textAlign: 'center',
		paddingHorizontal: '10%',
		paddingBottom: '10%',
	},
	actionButton: { height: 45, marginBottom: 10 },
	image: {
		height: 80,
		aspectRatio: 1,
		marginVertical: variables.textPadding,
		alignSelf: 'center',
		resizeMode: 'contain',
	},
})
