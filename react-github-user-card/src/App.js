import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      following: []
    };
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/waveownage`)
      .then(res => {
        this.setState({user: res.data});
      })
      .catch(err=> console.log("ERROR!", err));
    fetch(`https://api.github.com/users/waveownage/followers`)
      .then(res => {
        this.setState({following: res.data})
      })
      .catch(err=> console.log("ERROR!", err));
      
  }
  render() {
    return (
      <div>
      <h1>Hi!</h1>
      </div>
    )
  }
}

export default App;
