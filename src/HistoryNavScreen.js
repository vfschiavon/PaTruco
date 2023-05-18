import { createStackNavigator } from "@react-navigation/stack";

import History from './History'

const HistoryNav = createStackNavigator();


const HistoryNavScreen = ({ pointsHistory }) => (
	<HistoryNav.Navigator>
		<HistoryNav.Screen name="Histórico">
			{props => <History {...props} pointsHistory={pointsHistory} />}
		</HistoryNav.Screen>
	</HistoryNav.Navigator>
)


export default HistoryNavScreen;
