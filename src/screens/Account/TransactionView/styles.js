import { StyleSheet } from 'react-native'

import { colors, variables } from '../../../constants'

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.xxLightGrey
	},
	accountActions: { marginTop: variables.textPadding },
	feedView: {
		position: 'absolute',
		width: '100%',
		bottom: 0,
		backgroundColor: colors.white,
		borderTopRightRadius: variables.textPadding,
		borderTopLeftRadius: variables.textPadding,
		marginTop: 50
	},
	accountInfoCard: { marginTop: variables.appMargin },
	listItemPlaceholder: {
		marginVertical: variables.appMargin,
		marginHorizontal: variables.textPadding
	},
	sectionSeparator: {
		borderBottomColor: colors.xxLightGrey,
		borderBottomWidth: 1,
		marginLeft: variables.textPadding,
		marginTop: 10
	},
	sliderBar: {
		width: 45,
		height: 3,
		borderRadius: 5,
		backgroundColor: colors.lightGrey,
		marginTop: variables.textPadding,
		alignSelf: 'center'
	},
	modalView: {
		justifyContent: 'flex-end',
		margin: 0
	},
	gestureView: { height: 50 }
})
