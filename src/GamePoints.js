import React from 'react'


class TeamsPoints extends React.Component {
	constructor () {
		super()
		this.state = {
			turn_points: 1,
			turn_next_call: 'Truco',
		}
	}

	addTurnPoints = () => {
    if (this.state.turn_points === 1) {
      this.setState({ turn_points: 3 });
      this.setState({ turn_next_call: 'Seis' });
    } else if (this.state.turn_points === 3) {
      this.setState({ turn_points: 6 });
      this.setState({ turn_next_call: 'Nove' });
    } else if (this.state.turn_points === 6) {
      this.setState({ turn_points: 9 });
      this.setState({ turn_next_call: 'Doze' });
    } else if (this.state.turn_points === 9) {
      this.setState({ turn_points: 12 });
    } else if (this.state.turn_points === 12) {
      this.resetTurnPoints();
    }
    console.log(this.state.turn_points);
    console.log(this.state.turn_next_call);
  }

  resetTurnPoints = () => {
    this.setState({ turn_points: 1 });
    this.setState({ turn_next_call: 'Truco' });
  }
}

export default TeamsPoints
