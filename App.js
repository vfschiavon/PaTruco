import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import TeamsPoints from './src/TeamsPoints'
import GamePoints from './src/GamePoints'

import Button from './components/Button'

const backgroundImage = require('./assets/background/dark-2.png');

export default class App extends React.Component{
  state = {
    team_1: null,
    team_2: null,
    game: null,
    isMounted: false,
  }

  componentDidMount() {
    this.setState({ team_1: new TeamsPoints("Team 1"), team_2: new TeamsPoints("Team 2"), game: new GamePoints(), isMounted: true });
    console.log("App mounted");
  }

  render() {
    console.log(this.state);
    return this.state.isMounted ? (
      <View style={styles.container}>
        <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.background}>
          <Text style={styles.title}>PaTruco!</Text>
          <View style={styles.pointsContainer}>
            <Text style={styles.points}>{this.state.team_1.state.points}</Text>
            <Text style={styles.points}>{this.state.team_2.state.points}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button team_1={this.state.team_1} team_2={this.state.team_2} game={this.state.game} type="subtract" />
            <Button team_1={this.state.team_1} team_2={this.state.team_2} game={this.state.game} type="add" />
            <Button team_1={this.state.team_1} team_2={this.state.team_2} game={this.state.game} type="changeTurnCall" />
            <Button team_1={this.state.team_1} team_2={this.state.team_2} game={this.state.game} type="reset" />
          </View>
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    ) : (<View></View>);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // border: '2px solid blue'
  },
  pointsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  points: {
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  title: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
