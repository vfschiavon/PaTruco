import React from 'react'
import { ImageBackground, StyleSheet, Text, TextInput, Image, View, Alert } from 'react-native';
import * as Font from 'expo-font';

import Button from '../components/Button'

const backgroundImage = require('../assets/background/medium.png');
const duckPaw = require('../assets/duck/duck-paw.png');
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

	async componentDidMount() {
		await Font.loadAsync({
			bobaCups: require('../assets/fonts/BobaCups.ttf')
		});
	}

	submit = (team, turnPoints) => {
		const turnWinner = {
			name: this.state.teams[team].name,
			points: this.state.teams[team].points,
			turnPoints: turnPoints,
		}
		const score = this.state.teams[0].points + ' x ' + this.state.teams[1].points;
		this.props.addTurnHistory(turnWinner, score);
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
		if (this.state.teams[0].name === '' || this.state.teams[1].name === '') { alert("O nome do time não pode ser vazio!"); return; }
		if (this.state.teams[team].points + turnPoints < 12) {
			return this.setState({ ...this.state, turnPoints: 1, turnNextCall: 'Truco',
				teams: { ...this.state.teams, [team]: { ...this.state.teams[team], points: this.state.teams[team].points + turnPoints } }
			}, () => { this.submit(team, turnPoints) });
		}
		const otherTeam = !team ? 1 : 0;
		this.setState({ turnPoints: 1, turnNextCall: 'Truco', 
			teams: {
				[team]: { ...this.state.teams[team], points: 0, gamesWon: this.state.teams[team].gamesWon + 1 },
				[otherTeam]: { ...this.state.teams[otherTeam], points: 0 }
			}
		}, () => { this.submit(team, turnPoints), this.props.setGameFinished(this.state.teams[team].name) });
		this.showAlert('Parabéns ' + this.state.teams[team].name + '!');
	}

	subPoint = (team) => {
		if (this.state.teams[team].points > 0) {
			this.setState({ ...this.state,
				teams: { ...this.state.teams, [team]: { ...this.state.teams[team], points: this.state.teams[team].points - 1 } }
			}, () => { this.submit(team, -1) });
		}
	}

	resetAllPoints = () => {
		this.setState({ turnPoints: 1, turnNextCall: 'Truco',
			teams: [
				{ ...this.state.teams[0], points: 0},
				{ ...this.state.teams[1], points: 0}
			]
		}, () => this.props.resetTurn() );
	}

	call = () => {
		const pointsInfo = {
			[1]: { turnPoints: 3, turnNextCall: 'Seis' },
			[3]: { turnPoints: 6, turnNextCall: 'Nove' },
			[6]: { turnPoints: 9, turnNextCall: 'Doze' },
			[9]: { turnPoints: 12, turnNextCall: 'Um' },
			[12]: { turnPoints: 1, turnNextCall: 'Truco' }
		}
		this.setState({ ...this.state, ...pointsInfo[this.state.turnPoints] });
	}

	render() {
		return (
			<ImageBackground source={backgroundImage} resizeMode="cover" style={styles.background}>
				<Text style={styles.title}>PaTruco</Text>

				<Image source={duckGif} style={styles.centerImage} />

				<View style={styles.row}>
					<View style={styles.columnLeft}>
						<TextInput onChangeText={val => this.setName(0, val)} style={styles.input} value={this.state.teams[0].name} />
						<Text style={styles.points}>{this.state.teams[0].points}</Text>
						<Text style={styles.gamesWon}>{this.state.teams[0].gamesWon}</Text>
					</View>

					<View style={styles.columnRight}>
						<TextInput onChangeText={val => this.setName(1, val)} style={styles.input} value={this.state.teams[1].name} />
						<Text style={styles.points}>{this.state.teams[1].points}</Text>
						<Text style={styles.gamesWon}>{this.state.teams[1].gamesWon}</Text>
					</View>
				</View>

				<View style={styles.columnCenter}>
					<View style={styles.row}>
						<View style={styles.columnLeft}>
							<Button text='-' func={() => this.subPoint(0)} style={styles.buttonSub} />
							<Button
								image={duckPaw}
								text={this.state.turnPoints}
								func={() => this.addPoints(0, this.state.turnPoints)}
								style={styles.buttonAdd} />
						</View>

						<View style={styles.columnRight}>
							<Button text='-' func={() => this.subPoint(1)} style={styles.buttonSub} />
							<Button 
								image = {duckPaw}
								text={this.state.turnPoints}
								func={() => this.addPoints(1, this.state.turnPoints)}
								style={styles.buttonAdd}
							/>
						</View>
					</View>

					<View style={styles.centerButtons}>
						<Button text={this.state.turnNextCall} func={() => this.call()} style={styles.buttonCall} />
						<Button text='Reiniciar' func={() => this.resetAllPoints()} style={styles.buttonReset} /> 
					</View>
				</View>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	background: {
		width: '100%',
		height: '100%',
	},
	title: {
		fontSize: 65,
		fontFamily: 'bobaCups',
		textAlign: 'center',
		marginTop: 40,
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	columnLeft: {
		flexDirection: 'column',
		marginLeft: '5%',
	},
	columnRight: {
		flexDirection: 'column',
		marginRight: '5%',
	},
	columnCenter: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	centerButtons: {
		alignItems: 'center',
	},
	input: {
		height: 'auto',
		color: 'white',
		textAlign: 'center',
		maxWidth: 150,
		alignSelf: 'center',
		fontSize: 25,
		marginTop: 10,
	},
	points: {
		fontSize: 60,
		color: 'white',
		textAlign: 'center',
	},
	gamesWon: {
		fontSize: 20,
		color: 'white',
		textAlign: 'center',
	},
	centerImage: {
		width: '50%',
		height: '50%',
		resizeMode: 'contain',
		position: 'absolute',
		alignSelf: 'center',
		top: '20%',
	},
	buttonSub: {
		backgroundColor: '#ff4d4d',
		borderRadius: 50,
		width: 25,
		height: 25,
		justifyContent: 'center',
		marginBottom: 5,
		borderColor: 'black',
		borderWidth: 2,
	},
	buttonAdd: {
		borderRadius: 15,
		width: 120,
		height: 120,
		marginBottom: 10,
	},
	buttonCall: {
		backgroundColor: '#f1c40f',
		width: 350,
		height: 70,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		marginBottom: 10,
		borderColor: 'black',
		borderWidth: 3,
	},
	buttonReset: {
		backgroundColor: '#efefef',
		width: 200,
		height: 20,
		marginBottom: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		borderColor: 'black',
		borderWidth: 2,
	},
});
