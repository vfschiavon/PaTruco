import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import CenterMessage from '../components/CenterMessage'


export default class History extends React.Component {
	render() {
		const { turnHistory } = this.props
		return (
			<ScrollView contentContainerStyle={[!turnHistory.length && { flex: 1 }]}>
				<View style={[!turnHistory.length && { justifyContent: 'center', flex: 1 }]}>
					{
						!turnHistory.length && <CenterMessage message="Sem histórico de rodadas" />
					}
					{
						turnHistory.map((turnWinner, index) => (
							<View key={index} style={styles.turnHistory}>
								<View style={styles.pointsHistoryTeam}>
									<Text style={styles.pointsHistoryTeamName}>{turnWinner.name}</Text>
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
	turnHistory: {
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
