import React from 'react';
import { Text, TextInput, Image, View, Alert } from 'react-native';
import * as Font from 'expo-font';

import Button from '../components/Button';
import { styles } from './styles';

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
					points: 0
				}, {
					name: 'Time 2',
					points: 0
				}
			]
		}
		this.showAlertWin = this.showAlertWin.bind(this);
		this.showAlertResetTurn = this.showAlertResetTurn.bind(this);
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

	showAlertWin (winnerName) {
		Alert.alert(
			'Parabéns ' + winnerName + '!',
			winnerName + ' venceu a partida!',
			[{text: 'Ok', style: 'default'}]
		)
	}

	showAlertResetTurn () {
		Alert.alert(
			'Reiniciar rodada?',
			'Isso apagará todos os dados dessa rodada. Deseja continuar?',
			[{text: 'Cancelar', style: 'cancel'}, {text: 'Ok', onPress: () => this.resetTurn(), style: 'destructive'}]
		)
	}

	resetPoints = () => {
		this.setState({ ...this.state,
			teams: {
				[0]: { ...this.state.teams[0], points: 0 },
				[1]: { ...this.state.teams[1], points: 0 }
			}
		});
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
		this.setState({ turnPoints: 1, turnNextCall: 'Truco', 
			teams: { ...this.state.teams, [team]: { ...this.state.teams[team], points: 12 } }
		}, () => {  this.submit(team, turnPoints),
								this.props.setGameFinished(this.state.teams[team].name)
								this.resetPoints()
							});
		this.showAlertWin(this.state.teams[team].name);
	}

	subPoint = (team) => {
		if (this.state.teams[team].points > 0) {
			this.setState({ ...this.state,
				teams: { ...this.state.teams, [team]: { ...this.state.teams[team], points: this.state.teams[team].points - 1 } }
			}, () => { this.submit(team, -1) });
		}
	}

	resetTurn = () => {
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
			<View style={styles.background}>
				<View style={styles.titleView}>
					<Text style={styles.titleText}>PaTruco</Text>
				</View>
				<View style={styles.teamsView}>
					<View style={styles.namePointsViewRight}>
						<TextInput onChangeText={val => this.setName(0, val)} value={this.state.teams[0].name} style={styles.inputText}/>
						<Text style={styles.pointsText}>{this.state.teams[0].points}</Text>
					</View>
					<View style={styles.namePointsViewLeft }>
						<TextInput onChangeText={val => this.setName(1, val)} value={this.state.teams[1].name} style={styles.inputText}/>
						<Text style={styles.pointsText}>{this.state.teams[1].points}</Text>
					</View>
				</View>
				<View style={styles.imageView }>
					<Image source={duckGif} style={styles.image}/>
				</View>
				<View style={styles.subButtonsView }>
					<Button text='-' func={() => this.subPoint(0)} style={[styles.subButtons, styles.dropShadow]} styleText={styles.subButtonsText}/>
					<Button text='-' func={() => this.subPoint(1)} style={[styles.subButtons, styles.dropShadow]} styleText={styles.subButtonsText}/>
				</View>
				<View style={styles.addButtonsView }>
					<Button image={duckPaw} text={this.state.turnPoints} func={() => this.addPoints(0, this.state.turnPoints)} style={[styles.addButtons, styles.dropShadow]} styleText={styles.addButtonsText}/>
					<Button image={duckPaw} text={this.state.turnPoints} func={() => this.addPoints(1, this.state.turnPoints)} style={[styles.addButtons, styles.dropShadow]} styleText={styles.addButtonsText}/>
				</View>
				<View style={styles.callButtonView}>
					<Button text={this.state.turnNextCall} func={() => this.call()} style={[styles.callButton, styles.dropShadow]} styleText={styles.callButtonText}/>
				</View>
				<View style={styles.resetButtonView}>
					{/* () => this.showAlertResetTurn() */}
					<Button text='Reiniciar' func={() => this.resetTurn()} style={[styles.resetButton, styles.dropShadow]} styleText={styles.resetButtonText}/>
				</View>
			</View>
		);
	}
}
