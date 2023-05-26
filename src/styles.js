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
		shadowRadius: 3.84
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
		width: '100%',
		height: '100%',
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
		fontSize: 30,
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
		fontSize: 15,
		color: '#FFF',
		textAlign: 'center',
		fontWeight: 'bold'
	},
	gameBox: {
		height: 100,
		marginBottom: 15,
		padding: 15,
		backgroundColor: '#FFF',
		borderColor: '#000',
		borderWidth: 3,
		borderRadius: 25,
	},
	winnerNameBox: {
		fontSize: 25,
		color: '#000'
	},
	subViewBox: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	subTextBox: {
		fontSize: 15,
		color: '#000',
		alignSelf: 'flex-end'
	},
	trashButton: {
		flexDirection: 'row',
		justifyContent: 'space-evenly'
	},
	trashButtonText: {
		fontSize: 25,
		color: '#000',
		alignSelf: 'center'
	},
	trashButtonIcon: {
		width: 30,
		height: 30,
		alignSelf: 'center'
	},
	turnBoard: {
		flex: 1,
		padding: 15,
		backgroundColor: '#FFF',
		borderColor: '#000',
		borderWidth: 3,
		borderRadius: 25,
		overflow: 'hidden'
	},
	emptyTurnView: {
		flex: 1,
		justifyContent: 'center'
	},
	turnView: {
		flexDirection: 'column',
		justifyContent: 'flex-start'
	},
	emptyTurnText: {
		fontSize: 25,
		color: '#000',
		alignSelf: 'center'
	},
	turnBox: {
		flexDirection: 'column',
		marginBottom: 15,
		borderColor: '#000',
		borderBottomWidth: 1
	},
	turnBoxWinner: {
		fontSize: 20,
		color: '#000',
		marginBottom: 5
	},
	turnBoxTotal: {
		fontSize: 15,
		color: '#000',
		marginBottom: 3
	}
})
