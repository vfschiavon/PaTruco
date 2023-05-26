import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';

import { styles } from './styles';

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
			<View style={styles.background}>
				<ScrollView showsVerticalScrollIndicator={false}>
					{gameHistory.slice().reverse().map((game, index) => (
						<TouchableOpacity key={index} onPress={() => this.navigate(game.turnHistory)} style={[styles.gameBox, styles.dropShadow]}>
								{game.winnerName === '' && <Text style={styles.winnerNameBox}>Em andamento</Text>}
								{game.winnerName !== '' && <Text style={styles.winnerNameBox}>{game.winnerName}</Text>}
								<View style={styles.subViewBox}>
									{game.score !== '' && <Text style={styles.subTextBox}>Total: {game.score}</Text>}
									{game.dateTime !== '' && <Text style={styles.subTextBox}>{game.dateTime}</Text>}
								</View>
						</TouchableOpacity>
					))}
					{/* this.showAlertClearGame() */}
					<TouchableOpacity onPress={() => this.props.clearGameHistory()} style={[styles.gameBox, styles.trashButton, styles.dropShadow]}>
							<Text style={styles.trashButtonText}>Limpar histórico</Text>
							<Image style={styles.trashButtonIcon} source={trashCan} />
					</TouchableOpacity>
				</ScrollView>
			</View>
    )
  }
}
