import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	container: { flexDirection: 'row', justifyContent: 'space-around' },
	contentView: {
		flex: 1,
		borderBottomWidth: 4,
		borderBottomColor: '#d3d3d3'
	},
	contentSelected: { borderBottomColor: 'black' },
	contentText: {
		textAlign: 'center',
		padding: 15,
		color: '#d3d3d3',
		fontWeight: '600'
	},
	contentTextSelected: { color: 'black' }
})
