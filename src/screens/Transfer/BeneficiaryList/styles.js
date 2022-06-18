import { StyleSheet } from 'react-native'

import { variables, colors } from '../../../constants'

export default StyleSheet.create({
	container: { flex: 1, backgroundColor: colors.white },
	listContainer: { flex: 1, marginTop: variables.appMargin },
	actionButton: {
		marginHorizontal: variables.appMargin,
		marginBottom: variables.actionButtonMargin
	},
	tabView: { marginTop: 10 },
	searchBar: { padding: 30 },
	sectionHeader: {
		fontSize: 11,
		fontWeight: '800',
		paddingLeft: variables.appMargin,
		paddingBottom: 5
	},
	headerSeparator: {
		borderBottomWidth: 1,
		borderBottomColor: colors.xxLightGrey,
		backgroundColor: 'white'
	},
	headerMargin: { marginTop: variables.appMargin },
	separator: { width: '100%', height: 1, backgroundColor: colors.xxLightGrey },
	listItemPlaceholder: { margin: variables.appMargin }
})
