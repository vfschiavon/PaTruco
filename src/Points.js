import React from 'react'
import { ImageBackground, StyleSheet, Text, TextInput, Image, View, Alert } from 'react-native';

import Button from '../components/Button'

const backgroundImage = require('../assets/background/dark-1.png');
const duckImage = require('../assets/duck/walking-duck-frame.png');
const duckGif = require('../assets/duck/walking-duck.gif');


export default class Points extends React.Component{
	constructor() {
		super();
		this.state = {
			turnPoints: 1,
			turnNextCall: 'Truco',
			teams: [{
					name: 'Time 1',
					points: 0,
					gamesWon: 0,
				}, {
					name: 'Time 2',
					points: 0,
					gamesWon: 0,
				}]
		}
		this.showAlert = this.showAlert.bind(this);
	}

	submit = (team, turnPoints) => {
		const turnWinner = {
			name: this.state.teams[team].name,
			points: this.state.teams[team].points,
			gamesWon: this.state.teams[team].gamesWon,
			turnPoints: turnPoints,
		}
		this.props.addTurnHistory(turnWinner);
	}

	showAlert (alertTitle) {
		Alert.alert(
			alertTitle,
			'',
			[{text: 'Ok', style: 'destructive'}]
		)
	}

	setName = (team, name) => {
		this.setState({ ...this.state, teams: { ...this.state.teams, [team]: { ...this.state.teams[team], name: name } } });
	}

	addPoints = (team, turnPoints) => {
		if (this.state.teams[team].points + turnPoints < 12) {
			this.setState({ ...this.state, turnPoints: 1, turnNextCall: 'Truco',
				teams: { ...this.state.teams, [team]: { ...this.state.teams[team], points: this.state.teams[team].points + turnPoints } }
			}, () => { this.submit(team, turnPoints) });
		} else {
			if (team === 0) {
				this.setState({ turnPoints: 1, turnNextCall: 'Truco', 
					teams: {
						[team]: { ...this.state.teams[team], points: 0, gamesWon: this.state.teams[team].gamesWon + 1 },
						[1]: { ...this.state.teams[1], points: 0 }
					}
				}, () => { this.submit(team, turnPoints) });
			} else {
				this.setState({ turnPoints: 1, turnNextCall: 'Truco', 
					teams: {
						[0]: { ...this.state.teams[0], points: 0 },
						[team]: { ...this.state.teams[team], points: 0, gamesWon: this.state.teams[team].gamesWon + 1 }
					}
				}, () => { this.submit(team, turnPoints) });
			}
			this.showAlert('Parabéns ' + this.state.teams[team].name + '!');
		}
	}

	subPoint = (team) => {
		if (this.state.teams[team].points > 0) {
			this.setState({ ...this.state,
				teams: { ...this.state.teams, [team]: { ...this.state.teams[team], points: this.state.teams[team].points - 1 } }
			}, () => { this.submit(team, -1) });
		}
	}

	resetAll = () => {
		this.setState({ turnPoints: 1, turnNextCall: 'Truco',
			teams: [
				{ ...this.state.teams[0], points: 0, gamesWon: 0 },
				{ ...this.state.teams[1], points: 0, gamesWon: 0 }
			]
		}, () => this.props.resetTurnHistory() );
	}

	call = () => {
		if (this.state.turnPoints === 1) {
			this.setState({ ...this.state, turnPoints: 3, turnNextCall: 'Seis' });
		} else if (this.state.turnPoints === 3) {
			this.setState({ ...this.state, turnPoints: 6, turnNextCall: 'Nove' });
		} else if (this.state.turnPoints === 6) {
			this.setState({ ...this.state, turnPoints: 9, turnNextCall: 'Doze' });
		} else if (this.state.turnPoints === 9) {
			this.setState({ ...this.state, turnPoints: 12, turnNextCall: 'Um' });
		} else if (this.state.turnPoints === 12) {
			this.setState({ ...this.state, turnPoints: 1, turnNextCall: 'Truco' });
		}
	}

	render() {
		return (
			<View style={ styles.container }>
				<ImageBackground source={backgroundImage} resizeMode="cover" style={styles.background}>
					<Text style={styles.title}>PaTruco!</Text>

					<View style={styles.row}>
						<View style={styles.columnLeft}>
							<TextInput onChangeText={val => this.setName(0, val)} style={styles.input} value={this.state.teams[0].name} />
							<Text style={styles.points}>{this.state.teams[0].points}</Text>
							<Text style={styles.gamesWon}>{this.state.teams[0].gamesWon}</Text>
							<Button type='sub' text='-' func={() => this.subPoint(0)} />
							<Button type='add' text={this.state.turnPoints} func={() => this.addPoints(0, this.state.turnPoints)} />
						</View>

						<Image source={duckGif} style={styles.centerImage} />

						<View style={styles.columnRight}>
							<TextInput onChangeText={val => this.setName(1, val)} style={styles.input} value={this.state.teams[1].name} />
							<Text style={styles.points}>{this.state.teams[1].points}</Text>
							<Text style={styles.gamesWon}>{this.state.teams[1].gamesWon}</Text>
							<Button type='sub' text='-' func={() => this.subPoint(1)} />
							<Button type='add' text={this.state.turnPoints} func={() => this.addPoints(1, this.state.turnPoints)} />
						</View>
					</View>

					<View style={styles.columnCenter}>
						<Button type='call' text={this.state.turnNextCall} func={() => this.call()} />
						<Button type='reset' text='Reiniciar' func={() => this.resetAll()} /> 
					</View>
				</ImageBackground>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	background: {
		width: '100%',
		height: '100%',
	},
	title: {
		fontSize: 50,
		color: 'white',
		textAlign: 'center',
		marginTop: 20,
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	columnLeft: {
		flexDirection: 'column',
		marginLeft: 20,
	},
	columnRight: {
		flexDirection: 'column',
		marginRight: 20,
	},
	columnCenter: {
		flexDirection: 'column',
		alignItems: 'center',
	},
	input: {
		height: 40,
		color: 'white',
		textAlign: 'center',
		marginTop: 10,
	},
	points: {
		fontSize: 50,
		color: 'white',
		textAlign: 'center',
	},
	gamesWon: {
		fontSize: 20,
		color: 'white',
		textAlign: 'center',
	},
	centerImage: {
		width: 220,
		height: 220,
		resizeMode: 'contain',
		marginTop: 150,
	},
});
