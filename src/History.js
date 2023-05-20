import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'

import CenterMessage from '../components/CenterMessage'


export default class History extends React.Component {
	state = {
		selectedTeam: null
	}

	handleTeamClick = (index) => {
		this.setState((prevState) => ({
			selectedTeam: prevState.selectedTeam === index ? null : index
		}));
	}

	render() {
    const { turnHistory } = this.props;
    const { selectedTeam } = this.state;
    return (
      <ScrollView contentContainerStyle={[!turnHistory.length && { flex: 1 }]}>
        <View style={[!turnHistory.length && { justifyContent: 'center', flex: 1 }]}>
          {!turnHistory.length && <CenterMessage message="Sem histórico de rodadas" />}
          {turnHistory.map((turnWinner, index) => (
						<TouchableOpacity key={index} onPress={() => this.handleTeamClick(index)}>
						<View
							style={[
								styles.turnHistory,
								selectedTeam === index && styles.selectedTeam,
							]}
						>
							<View style={styles.pointsHistoryTeam}>
								<Text style={styles.pointsHistoryTeamName}>{turnWinner.name}</Text>
							</View>
							{selectedTeam === index && (
								<View>
									<Text>Points: {turnWinner.points}</Text>
									<Text>Games won: {turnWinner.gamesWon}</Text>
									<Text>Turn points: {turnWinner.turnPoints}</Text>
								</View>
							)}
						</View>
					</TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
	turnHistory: {
		flexDirection: 'column',
		padding: 10,
		borderBottomWidth: 3,
		borderBottomColor: '#205375',
	},
	pointsHistoryTeam: {
		flexDirection: 'column',
	},
	pointsHistoryTeamName: {
		fontSize: 20,
	},
	selectedTeam: {
    backgroundColor: '#a3b9c9',
  }
})
