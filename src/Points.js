import React from 'react'
import { ImageBackground, StyleSheet, Text, TextInput, Image, View, Alert } from 'react-native';

import Button from '../components/Button'

const backgroundImage = require('../assets/background/dark-2.png');
const duckImage = require('../assets/duck/walking-duck-frame.png');


export default class Points extends React.Component{
	constructor() {
		super();
		this.state = {
			turnPoints: 1,
			turnNextCall: 'Truco',
			team1: {
				name: 'Time 1',
				points: 0,
				gamesWon: 0,
			},
			team2: {
				name: 'Time 2',
				points: 0,
				gamesWon: 0,
			},
		}
		// this.state = {
		// 	turnPoints: 1,
		// 	turnNextCall: 'Truco',
		// 	teams: [{
		// 			name: 'Time 1',
		// 			points: 0,
		// 			gamesWon: 0,
		// 		}, {
		// 			name: 'Time 2',
		// 			points: 0,
		// 			gamesWon: 0,
		// 		}]
		// }
		this.showAlert = this.showAlert.bind(this);
	}

	submit = () => {
		const points = {
			team1: {
				name: this.state.team1.name,
				points: this.state.team1.points,
				gamesWon: this.state.team1.gamesWon,
			},
			team2: {
				name: this.state.team2.name,
				points: this.state.team2.points,
				gamesWon: this.state.team2.gamesWon,
			}
		}
		this.props.addPointsHistory(points);
	}

	showAlert ( alertTitle ) {
		Alert.alert(
			alertTitle,
			'',
			[{text: 'Ok', onPress: () => this.submit(), style: 'destructive'}]
		)
	}

	setNameTeam1 = (name) => {
		this.setState({ ...this.state, team1: { ...this.state.team1, name: name } });
	}

	addPointsTeam1 = (points) => {
		if (this.state.team1.points + points < 12) {
			this.setState({ ...this.state, turnPoints: 1, turnNextCall: 'Truco',
				team1: { ...this.state.team1, points: this.state.team1.points + points }
			});
		} else {
			this.setState({ turnPoints: 1, turnNextCall: 'Truco',
				team1: { ...this.state.team1, points: 0, gamesWon: this.state.team1.gamesWon + 1 },
				team2: { ...this.state.team2, points: 0 },
			});
			this.showAlert('Time 1 ganhou esta mão!');
		}
		this.submit();
	}

	subPointTeam1 = () => {
		if (this.state.team1.points > 0) {
			this.setState({ ...this.state, team1: { ...this.state.team1, points: this.state.team1.points - 1 } });
			this.submit();
		}
	}

	setNameTeam2 = (name) => {
		this.setState({ ...this.state, team2: { ...this.state.team2, name: name } });
	}

	addPointsTeam2 = (points) => {
		if (this.state.team2.points + points < 12) {
			this.setState({ ...this.state, turnPoints: 1, turnNextCall: 'Truco',
			team2: { ...this.state.team2, points: this.state.team2.points + points },
			});
		} else {
			this.setState({ turnPoints: 1, turnNextCall: 'Truco',
				team1: { ...this.state.team1, points: 0 },
				team2: { ...this.state.team2, points: 0, gamesWon: this.state.team2.gamesWon + 1 },
			});
			this.showAlert('Time 2 ganhou esta mão!');
		}
		this.submit();
	}

	subPointTeam2 = () => {
		if (this.state.team2.points > 0) {
			this.setState({ ...this.state, team2: { ...this.state.team2, points: this.state.team2.points - 1 } });
			this.submit();
		}
	}

	resetAll = () => {
		this.setState({ turnPoints: 1, turnNextCall: 'Truco',
			team1: { ...this.state.team1, points: 0, gamesWon: 0 },
			team2: { ...this.state.team2, points: 0, gamesWon: 0 },
		});
		this.props.clearPointsHistory();
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
							<TextInput onChangeText={this.setNameTeam1} style={styles.input} value={this.state.team1.name} />
							<Text style={styles.points}>{this.state.team1.points}</Text>
							<Text style={styles.gamesWon}>{this.state.team1.gamesWon}</Text>
							<Button type='sub' text='-' func={() => this.subPointTeam1()} />
							<Button type='add' text={this.state.turnPoints} func={() => this.addPointsTeam1(this.state.turnPoints)} />
						</View>

						{/* <Image source={duckImage} style={styles.centerImage} /> */}

						<View style={styles.columnRight}>
							<TextInput onChangeText={this.setNameTeam2} style={styles.input} value={this.state.team2.name} />
							<Text style={styles.points}>{this.state.team2.points}</Text>
							<Text style={styles.gamesWon}>{this.state.team2.gamesWon}</Text>
							<Button type='sub' text='-' func={() => this.subPointTeam2()} />
							<Button type='add' text={this.state.turnPoints} func={() => this.addPointsTeam2(this.state.turnPoints)} />
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
		borderColor: 'red',
		borderWidth: 1,
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
		width: 100,
		height: 100,
		marginTop: 50,
	},
});
