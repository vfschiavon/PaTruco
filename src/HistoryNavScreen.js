import { createStackNavigator } from "@react-navigation/stack";

import GameHistory from './GameHistory'
import TurnHistory from './TurnHistory'

const HistoryNav = createStackNavigator();


const HistoryNavScreen = ({ gameHistory, clearGameHistory }) => (
	<HistoryNav.Navigator>
		<HistoryNav.Screen name="Jogos">
			{props => <GameHistory {...props} gameHistory={gameHistory} clearGameHistory={clearGameHistory} />}
		</HistoryNav.Screen>
		<HistoryNav.Screen name="Rodadas">
			{props => <TurnHistory {...props} />}
		</HistoryNav.Screen>
	</HistoryNav.Navigator>
)


export default HistoryNavScreen;
