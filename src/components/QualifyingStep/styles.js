import { StyleSheet } from 'react-native'

import { colors, variables } from '../../constants'

export default StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: colors.xxLightGrey,
		alignItems: 'center'
	},
	image: { marginRight: variables.textPadding },
	title: { fontSize: 14, fontWeight: '800', color: colors.brownishGrey }
})
