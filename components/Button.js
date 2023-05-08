import { StyleSheet, Text, TouchableHighlight, Image, View } from 'react-native';

import TeamsPoints from '../src/TeamsPoints'
import GamePoints from '../src/GamePoints'


function resetAll(team_1, team_2) {
	team_1.resetPointsAndGamesWon();
	team_2.resetPointsAndGamesWon();
}

function addPointsTeam1(team_1, game) {
	team_1.addPoints(game.state.turn_points);
	game.resetTurnPoints();
}

function addPointsTeam2(team_2, game) {
	team_2.addPoints(game.state.turn_points);
	game.resetTurnPoints();
}

function Button({ team_1, team_2, game, type }) {
  if (type === "subtract") {
		return (
			<View style={styles.buttonContainer}>
				<TouchableHighlight style={styles.buttonLeft} onPress={() => team_1.subPoint()}>
					<Text style={styles.text}>-1</Text>
				</TouchableHighlight>
				<TouchableHighlight style={styles.buttonRight} onPress={() => team_2.subPoint()}>
					<Text style={styles.text}>-1</Text>
				</TouchableHighlight>
			</View>
		);
  } else if (type === "add") {
		return (
			<View style={styles.buttonContainer}>
				<TouchableHighlight style={styles.buttonLeft} onPress={() => addPointsTeam1(team_1, game)}>
					<Text style={styles.text}>+{game.state.turn_points}</Text>
				</TouchableHighlight>
				<TouchableHighlight style={styles.buttonRight} onPress={() => addPointsTeam2(team_2, game)}>
					<Text style={styles.text}>+{game.state.turn_points}</Text>
				</TouchableHighlight>
			</View>
		);
	} else if (type === "changeTurnCall") {
		return (
			<View style={styles.buttonContainer}>
				<TouchableHighlight style={styles.buttonCenter} onPress={() => game.addTurnPoints()}>
					<Text style={styles.text}>{game.state.turn_next_call}</Text>
				</TouchableHighlight>
			</View>
		);
  } else if (type === "reset") {
		return (
			<View style={styles.buttonContainer}>
				<TouchableHighlight style={styles.buttonCenter} onPress={() => resetAll(team_1, team_2)}>
					<Text style={styles.text}>Reset</Text>
				</TouchableHighlight>
			</View>
		);
  }
}


const styles = StyleSheet.create({
	buttonContainer: {
		flex: 1,
		flexDirection: 'row',
	},
	buttonLeft: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		borderRightWidth: 1,
		borderRightColor: '#000',

		width: 50,
		height: 50,
	},
	buttonCenter: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',

		width: 50,
		height: 50,
	},
	buttonRight: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		borderLeftWidth: 1,
		borderLeftColor: '#000',

		width: 50,
		height: 50,
	},
	image: {
		width: 50,
		height: 50,
	},
	text: {
		fontSize: 30,
	},
})


export default Button
