import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Points from './src/Points'
import HistoryNavScreen from './src/HistoryNavScreen'

const Tab = createMaterialBottomTabNavigator();

export default class App extends React.Component{
  state = {
    pointsHistory: []
  }

  addPointsHistory = (points) => {
    const pointsHistory = this.state.pointsHistory
    pointsHistory.push(points)
    this.setState({ pointsHistory })

    console.log(this.state.pointsHistory)
  }

  clearPointsHistory = () => {
    this.setState({ pointsHistory: [] })
  }

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Contador">
            {() => <Points addPointsHistory={this.addPointsHistory} clearPointsHistory={this.clearPointsHistory} />}
          </Tab.Screen>
          <Tab.Screen name="Histórico">
            {props => <HistoryNavScreen {...props} pointsHistory={this.state.pointsHistory} />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    );
  };
}
