import { StyleSheet, Dimensions } from 'react-native'

import { variables, colors } from '../../constants'

export default StyleSheet.create({
	container: { flex: 1, backgroundColor: colors.xxLightGrey },
	backContainer: {
		padding: variables.appMargin,
		marginTop: variables.appMargin
	},
	textContainer: {
		paddingHorizontal: variables.appMargin,
		paddingVertical: Dimensions.get('window').height * 0.1
	},
	title: {
		fontSize: 25,
		fontWeight: '800',
		color: colors.brownishGrey,
		marginBottom: 5
	},
	message: {
		fontSize: 16,
		fontWeight: '400',
		color: colors.brownishGrey,
		marginBottom: 5
	},
	otpContainer: {
		flex: 1,
		justifyContent: 'center'
	},
	keyboardAvoidingView: {
		flex: 1,
		justifyContent: 'flex-end'
	},
	resendButton: { fontSize: 15, fontWeight: '700', color: colors.brownishGrey },
	resendTimer: { fontSize: 15, fontWeight: '600', color: colors.brownishGrey },
	resendContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: variables.appMargin,
		paddingVertical: 10
	}
})
