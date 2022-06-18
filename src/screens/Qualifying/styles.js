import { StyleSheet } from 'react-native'

import { colors, variables } from '../../constants'

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.xxLightGrey,
		marginTop: variables.textPadding
	},
	title: {
		fontSize: 25,
		fontWeight: '700',
		color: colors.brownishGrey,
		marginBottom: variables.textPadding
	},
	text: {
		fontSize: 15,
		fontWeight: '800',
		color: colors.brownishGrey,
		marginTop: variables.textPadding,
		marginBottom: 10
	},
	step: { marginVertical: 10 },
	listContainer: {
		borderRadius: 10,
		borderWidth: 1,
		borderColor: colors.brownishGrey,
		marginVertical: 10
	},
	checkBox: { margin: 10 },
	scrollViewContent: {
		justifyContent: 'space-between',
		paddingHorizontal: variables.appMargin
	},
	actionButtonContainer: {
		marginBottom: variables.actionButtonMargin,
		paddingHorizontal: variables.appMargin
	}
})
