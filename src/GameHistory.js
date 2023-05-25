import React from 'react'
import { ImageBackground, View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Alert } from 'react-native'

import CenterMessage from '../components/CenterMessage'

const backgroundImage = require('../assets/background/medium.png');
const trashCan = require('../assets/icons/trash-can.png');


export default class GameHistory extends React.Component {

	navigate = (item) => {
		this.props.navigation.navigate('Rodadas', { turnHistory: item })
	}

	showAlertClearGame = () => {
		Alert.alert(
			'Limpar histórico?',
			'Isso apagará todos os dados do histórico. Deseja continuar?',
			[{text: 'Cancelar', style: 'cancel'}, {text: 'Ok', onPress: () => this.props.clearGameHistory(), style: 'destructive'}]
		)
	}

	render() {
    const { gameHistory } = this.props;
    return (
			<ImageBackground source={backgroundImage} resizeMode="cover" style={styles.background}>
				<ScrollView contentContainerStyle={{ marginHorizontal: 15, marginVertical: 20 }} showsVerticalScrollIndicator={false}>
					{gameHistory.slice().reverse().map((game, index) => (
						<View key={index} style={styles.gameBox}>
							<TouchableOpacity onPress={() => this.navigate(game.turnHistory)} style={styles.column}>
								{game.winnerName === '' && <CenterMessage message="Em andamento" />}
								{game.winnerName !== '' && <Text style={styles.gameWinner}>{game.winnerName}</Text>}
								<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
									{game.score !== '' && <Text style={styles.gameSubText}>Total: {game.score}</Text>}
									{game.dateTime !== '' && <Text style={styles.gameSubText}>{game.dateTime}</Text>}
								</View>
							</TouchableOpacity>
						</View>
					))}
					{/* <TouchableOpacity onPress={() => this.showAlertClearGame()} style={styles.column}> */}
					<TouchableOpacity onPress={() => this.props.clearGameHistory()} style={styles.column}>
						<View style={styles.gameBox}>
							<Text style={[styles.gameWinner, {alignSelf: 'center'}]}>Limpar histórico</Text>
							<Image style={{ width: 30, height: 30, alignSelf: 'center' }} source={trashCan} />
						</View>
					</TouchableOpacity>
				</ScrollView>
			</ImageBackground>
    )
  }
}


const styles = StyleSheet.create({
	background: {
		width: '100%',
		height: '100%',
	},
	column: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
		marginVertical: 15,
	},
	gameBox: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderCollor: '#000',
		borderWidth: 3,
		height: 100,
		marginHorizontal: 15,
		marginTop: 20,
		marginBottom: 10,
		borderRadius: 10,
		paddingHorizontal: 20,
		backgroundColor: '#fff',
		shadowColor: '#000',
  	shadowOffset: { width: 0, height: 2 },
  	shadowOpacity: 0.25,
  	shadowRadius: 3.84,
  	elevation: 5,
	},
	gameWinner: {
		fontSize: 30,
	},
	gameSubText: {
		fontSize: 15,
	}
})
