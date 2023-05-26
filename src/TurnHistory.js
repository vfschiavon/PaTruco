import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './styles';


export default class TurnHistory extends React.Component {
	render () {
		const { turnHistory } = this.props.route.params;
		return (
			<View style={styles.background}>
				<View style={[styles.turnBoard, styles.dropShadow]}>
					<ScrollView
						showsVerticalScrollIndicator={false}
						contentContainerStyle={turnHistory.length ? styles.turnView : styles.emptyTurnView}
					>
						{!turnHistory.length && <Text style={styles.emptyTurnText}>Nenhuma rodada jogada</Text>}
						{turnHistory.map((turnWinner, index) => (
							<View key={index} style={styles.turnBox}>
								<Text style={styles.turnBoxWinner}>{turnWinner.turnPoints} ponto(s) para {turnWinner.name}</Text>
								<Text style={styles.turnBoxTotal}>Total: {turnWinner.points}</Text>
							</View>
						))}
					</ScrollView>
				</View>
			</View>
		)
	}
}
