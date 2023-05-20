import React from 'react'
import { Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Points from './src/Points'
import HistoryNavScreen from './src/HistoryNavScreen'

const cards_outline = require('./assets/icons/cards-outline.png')
const cards_solid = require('./assets/icons/cards-solid.png')
const list_numbered_outline = require('./assets/icons/list-numbered-outline.png')

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
        <Tab.Navigator initialRouteName="Contador" >
          <Tab.Screen name="Contador"
            options={{
              tabBarIcon: ({ focused}) => (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    source={focused ? cards_solid : cards_outline}
                    resizeMode="contain"
                    style={{ width: 25, height: 25, tintColor: focused ? 'black' : 'gray' }}
                  />
                </View>
              )
            }}
          >
            {() => <Points addTurnHistory={this.addTurnHistory} resetTurnHistory={this.resetTurnHistory} />}
          </Tab.Screen>
          <Tab.Screen name="Histórico"
            options={{
              tabBarIcon: ({ focused}) => (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    source={focused ? list_numbered_outline : list_numbered_outline}
                    resizeMode="contain"
                    style={{ width: 25, height: 25, tintColor: focused ? 'black' : 'gray' }}
                  />
                </View>
              )
            }}
          >
            {props => <HistoryNavScreen {...props} turnHistory={this.state.turnHistory} />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    );
  };
}
