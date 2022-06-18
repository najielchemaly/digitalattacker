import { StyleSheet } from 'react-native'
import { variables } from '../../constants'

export default StyleSheet.create({
	container: {
		flex: 1,
		alignSelf: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: variables.textPadding
	},
	progressContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 10
	},
	image: { width: 15, height: 15, marginBottom: 15 },
	progressView: {
		width: '100%',
		borderRadius: 5,
		transform: [{ scaleX: 1.0 }, { scaleY: 1.5 }]
	}
})
