import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillMount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Clock</h1>
        <p className="time">{this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}
