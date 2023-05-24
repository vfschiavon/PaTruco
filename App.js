import React from 'react'
import { Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Points from './src/Points'
import HistoryNavScreen from './src/HistoryNavScreen'

const cards_outline = require('./assets/icons/duck-cards-outline.png')
const cards_solid = require('./assets/icons/duck-cards-solid.png')
const list_numbered_outline = require('./assets/icons/list-numbered-outline.png')

const Tab = createMaterialBottomTabNavigator();

export default class App extends React.Component{
  state = {
    gameHistory: [{
      turnHistory: [],
      winnerName: '',
      dateTime: '',
      score: ''
    }]
  }

  addTurnHistory = (turnWinner) => {
    const lastPos = this.state.gameHistory.length - 1
    const gameHistory = [...this.state.gameHistory]
    gameHistory[lastPos].turnHistory.push(turnWinner)
    this.setState({ gameHistory })

    console.log(this.state.gameHistory)
  }

  getFormattedDate = () => {
    const date = new Date();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formattedDate = date.toLocaleDateString('en-GB', options);
    const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    const dateTimeString = `${formattedDate} - ${formattedTime}`;
    return dateTimeString
  }

  setGameFinished = ( winnerName ) => {
    const lastPos = this.state.gameHistory.length - 1
    const gameHistory = [...this.state.gameHistory]
    gameHistory[lastPos].winnerName = winnerName
    gameHistory[lastPos].dateTime = this.getFormattedDate();
    gameHistory.push({
      turnHistory: [],
      winnerName: '',
      dateTime: '',
      score: ''
    })

    this.setState({ gameHistory }, () => {console.log(this.state.gameHistory)})
  }

  resetTurn = () => {
    const lastPos = this.state.gameHistory.length - 1
    const gameHistory = [...this.state.gameHistory]
    gameHistory[lastPos].turnHistory = []
    this.setState({ gameHistory })
  }

  clearGameHistory = () => {
    this.setState({ gameHistory: [{
      turnHistory: [],
      winnerName: '',
      dateTime: '',
      score: ''
      }]
    })
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
            {() => <Points addTurnHistory={this.addTurnHistory} setGameFinished={this.setGameFinished} resetTurn={this.resetTurn} />}
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
            {props => <HistoryNavScreen {...props} gameHistory={this.state.gameHistory} />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    );
  };
}
