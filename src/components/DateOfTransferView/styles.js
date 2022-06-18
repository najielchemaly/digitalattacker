import { StyleSheet } from 'react-native'

import { variables, colors } from '../../constants'

export default StyleSheet.create({
	flexOne: { flex: 1 },
	container: { flex: 1, paddingHorizontal: variables.appMargin },
	contentView: {
		paddingVertical: 15,
		borderRadius: 7,
		borderColor: colors.lightGrey,
		borderWidth: 1
	},
	onOffContainer: {
		flex: 1,
		flexDirection: 'row',
		paddingHorizontal: variables.textPadding,
		justifyContent: 'space-between',
		alignItems: 'center',
		borderBottomColor: colors.xLightGrey,
		borderBottomWidth: 1,
		marginBottom: 15,
		paddingBottom: 15
	},
	recurringContainer: {
		flexDirection: 'row',
		paddingHorizontal: variables.textPadding,
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	flexRow: { flexDirection: 'row' },
	radioView: {
		width: 32,
		height: 32,
		backgroundColor: colors.xLightGrey,
		borderRadius: 20,
		padding: 6,
		marginRight: 10
	},
	radioButton: {
		flex: 1,
		backgroundColor: colors.brownishGrey,
		borderRadius: 20
	},
	title: {
		fontSize: 14,
		color: colors.brownishGrey,
		marginBottom: 5,
		fontWeight: '700'
	},
	value: {
		fontSize: 12,
		color: colors.lightGrey,
		fontWeight: '600'
	},
	textButton: {
		fontSize: 12,
		color: colors.brownishGrey,
		fontWeight: '700',
		alignSelf: 'flex-end',
		marginTop: variables.textPadding
	}
})
