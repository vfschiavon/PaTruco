import React from 'react'
import { ImageBackground, View, Text, StyleSheet, ScrollView } from 'react-native'

import CenterMessage from '../components/CenterMessage'

const backgroundImage = require('../assets/background/medium.png');


export default class TurnHistory extends React.Component {
	render () {
		const { turnHistory } = this.props.route.params;
		return (
			<ImageBackground source={backgroundImage} resizeMode="cover" style={styles.background}>
				<View style={styles.turnBoard}>
					<ScrollView contentContainerStyle={{ marginHorizontal: 15, marginVertical: 20 }} showsVerticalScrollIndicator={false}>
						<View style={[!turnHistory.length && { justifyContent: 'center', flex: 1 }]}>
						{!turnHistory.length && <CenterMessage message="Sem histórico de rodadas" />}
							{turnHistory.map((turnWinner, index) => (
								<View key={index} style={styles.turnHistory}>
									<View style={styles.turnBox}>
										<View style={styles.pointsHistoryText}>
											<Text style={styles.pointsHistoryText}>
													{turnWinner.turnPoints} ponto(s) para {turnWinner.name}
											</Text>
											<Text style={styles.pointsHistorySmall}>
													Total: {turnWinner.points}
											</Text>
										</View>
									</View>
								</View>
							))}
						</View>
					</ScrollView>
				</View>
			</ImageBackground>
		)
	}
}


const styles = StyleSheet.create({
	background: {
		width: '100%',
		height: '100%',
	},
	turnBoard: {
		flex: 1,
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
		overflow: 'hidden',
	},
	turnBox: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderBottomColor: 'gray',
		borderBottomWidth: 1,
	},
	turnHistory: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 10,
		borderBottomColor: '#000',
	},
	pointsHistoryText: {
		fontSize: 20,
	},
	pointsHistorySmall: {
		fontSize: 10,
	},
})
