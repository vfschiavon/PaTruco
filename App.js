import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Points from './src/Points'
import HistoryNavScreen from './src/HistoryNavScreen'

const Tab = createMaterialBottomTabNavigator();

export default class App extends React.Component{
  state = {
    turnHistory: []
  }

  addTurnHistory = (turnWinner) => {
    const turnHistory = this.state.turnHistory
    turnHistory.push(turnWinner)
    this.setState({ turnHistory })

    console.log(this.state.turnHistory)
  }

  resetTurnHistory = () => {
    this.setState({ turnHistory: [] })
  }

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Contador">
            {() => <Points addTurnHistory={this.addTurnHistory} resetTurnHistory={this.resetTurnHistory} />}
          </Tab.Screen>
          <Tab.Screen name="Histórico">
            {props => <HistoryNavScreen {...props} turnHistory={this.state.turnHistory} />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    );
  };
}
