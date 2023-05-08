import React from 'react'


class TeamsPoints extends React.Component {
  constructor(name){
    super()
    this.state = {
      name: name,
      points: 0,
      games_won: 0,
    }
  }

  setName = (name) => {
    this.setState({ name: name });
  }

	addPoints = (points) => {
    this.setState({ points: this.state.points + points });
    if (this.state.points >= 12) {
      this.setState({ games_won: this.state.games_won + 1 });
      this.setState({ points: 0 });
    }
  }

  subPoint = () => {
    if (this.state.points > 0) {
      this.setState({ points: this.state.points - 1 });
    }
  }

  resetPointsAndGamesWon = () => {
    this.setState({ points: 0 });
    this.setState({ games_won: 0 });
  }
}

export default TeamsPoints
