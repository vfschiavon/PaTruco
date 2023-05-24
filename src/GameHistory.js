import React from 'react'
import { ImageBackground, View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'

import CenterMessage from '../components/CenterMessage'

const backgroundImage = require('../assets/background/medium.png');


export default class GameHistory extends React.Component {
	navigate = (item) => {
		this.props.navigation.navigate('Rodadas', { turnHistory: item })
		console.log(item)
	}

	render() {
    const { gameHistory } = this.props;
    return (
      <ScrollView contentContainerStyle={{ flex: 1 }}>
				<ImageBackground source={backgroundImage} resizeMode="cover" style={styles.background}>
					{gameHistory.slice().reverse().map((game, index) => (
						<View key={index} style={styles.gameBox}>
							<TouchableOpacity onPress={() => this.navigate(game.turnHistory)} style={styles.column}>
								{game.winnerName === '' && <CenterMessage message="Em andamento" />}
								{game.winnerName !== '' && <Text style={styles.gameWinner}>{game.winnerName}</Text>}
								{game.dateTime !== '' && <Text style={styles.gameDate}>{game.dateTime}</Text>}
							</TouchableOpacity>
						</View>
					))}
				</ImageBackground>
      </ScrollView>
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
		flexDirection: 'columns',
		justifyContent: 'space-between',
		marginVertical: 15,
	},
	gameBox: {
		height: 100,
		marginHorizontal: 15,
		marginVertical: 20,
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
	gameDate: {
		fontSize: 15,
	}
})
