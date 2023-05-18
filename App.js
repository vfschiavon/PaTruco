import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Points from './src/Points'

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

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Contador">
            {() => <Points addPointsHistory={this.addPointsHistory} />}
          </Tab.Screen>

          {/* <Tab.Screen name="Histórico">
            
          </Tab.Screen> */}
        </Tab.Navigator>
      </NavigationContainer>
    );
  };
}
