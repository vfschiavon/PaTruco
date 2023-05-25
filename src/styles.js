import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  background: {
		flex: 1,
		backgroundColor: '#3DA5D9',
		padding: 15
	},
	dropShadow: {
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5
	},
	titleView: {
		flex: 3,
		justifyContent: 'center'
	},
	titleText: {
		fontSize: 65,
		fontFamily: 'bobaCups',
		textAlign: 'center'
	},
	teamsView: {
		flex: 4,
		flexDirection: 'row'
	},
	namePointsViewRight: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-end',
		marginRight: 15
	},
	namePointsViewLeft: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-end',
		marginLeft: 15
	},
	inputText: {
		fontSize: 25,
		color: '#FFF',
		textAlign: 'center'
	},
	pointsText: {
		fontSize: 60,
		color: '#FFF',
		textAlign: 'center'
	},
	imageView: {
		flex: 6
	},
	image: {
		flex: 1,
		resizeMode: 'contain'
	},
	subButtonsView: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	subButtons: {
		backgroundColor: '#FF4D4D',
		borderRadius: 50,
		borderColor: '#000',
		borderWidth: 2,
		aspectRatio: 1,
		justifyContent: 'center'
	},
	subButtonsText: {
		fontSize: 25,
		color: '#FFF',
		textAlign: 'center'
	},
	addButtonsView: {
		flex: 4,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 15
	},
	addButtons: {
		width: 105,
		height: 105,
		borderRadius: 15,
		justifyContent: 'center'
	},
	addButtonsText: {
		fontSize: 20,
		color: '#FFF',
		textAlign: 'center',
		fontWeight: 'bold'
	},
	callButtonView: {
		flex: 3
	},
	callButton: {
		flex: 1,
		backgroundColor: '#F1C40F',
		borderColor: '#000',
		borderWidth: 3,
		borderRadius: 25,
		justifyContent: 'center'
	},
	callButtonText: {
		fontSize: 40,
		color: '#FFF',
		textAlign: 'center',
		fontWeight: 'bold'
	},
	resetButtonView: {
		flex: 2
	},
	resetButton: {
		flex: 1,
		backgroundColor: '#AFAFAF',
		borderColor: '#000',
		borderWidth: 3,
		borderRadius: 25,
		justifyContent: 'center',
		marginHorizontal: '15%',
		marginTop: 15
	},
	resetButtonText: {
		fontSize: 20,
		color: '#FFF',
		textAlign: 'center',
		fontWeight: 'bold'
	}
})
