import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import CenterMessage from '../components/CenterMessage'


export default class History extends React.Component {
	render() {
		const { pointsHistory } = this.props
		return (
			<ScrollView contentContainerStyle={[!pointsHistory.length && { flex: 1 }]}>
				<View style={[!pointsHistory.length && { justifyContent: 'center', flex: 1 }]}>
					{
						!pointsHistory.length && <CenterMessage message="Sem histórico de pontos" />
					}
					{
						pointsHistory.map((points, index) => (
							<View key={index} style={styles.pointsHistory}>
								<View style={styles.pointsHistoryTeam}>
									<Text style={styles.pointsHistoryTeamName}>{points.team1.name}</Text>
									<Text style={styles.pointsHistoryTeamPoints}>{points.team1.points}</Text>
								</View>
								<View style={styles.pointsHistoryTeam}>
									<Text style={styles.pointsHistoryTeamName}>{points.team2.name}</Text>
									<Text style={styles.pointsHistoryTeamPoints}>{points.team2.points}</Text>
								</View>
							</View>
						))
					}
				</View>
			</ScrollView>
		)
	}
}


const styles = StyleSheet.create({
	pointsHistory: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10,
		borderBottomWidth: 2,
		borderBottomColor: '#1976D2',
	},
	pointsHistoryTeam: {
		flexDirection: 'column',
	},
	pointsHistoryTeamName: {
		alignSelf: 'center',
		fontSize: 20,
	},
	pointsHistoryTeamPoints: {
		alignSelf: 'center',
		fontSize: 30,
	},
})
