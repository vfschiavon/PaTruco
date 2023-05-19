import { createStackNavigator } from "@react-navigation/stack";

import History from './History'

const HistoryNav = createStackNavigator();


const HistoryNavScreen = ({ turnHistory }) => (
	<HistoryNav.Navigator>
		<HistoryNav.Screen name="Vencedores das rodadas">
			{props => <History {...props} turnHistory={turnHistory} />}
		</HistoryNav.Screen>
	</HistoryNav.Navigator>
)


export default HistoryNavScreen;
