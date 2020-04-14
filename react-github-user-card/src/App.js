import React from 'react';
import './App.css';
import UserCard from "./components/UserCard";
import FollowerCard from "./components/FollowerCard";
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    };
  }

  componentDidMount() {
    axios
    .get(`https://api.github.com/users/waveownage`)
    .then(res => {
      this.setState({ user: res.data});
    })
    .catch(err => console.log("ERROR!", err));

    axios
    .get(`https://api.github.com/users/waveownage/followers`)
    .then(res => {
      this.setState({followers: res.data})
    })
    .catch(err => console.log("ERROR!", err));
  }
  render() {
    return (
      <div>
      <UserCard user={this.state.user}/>
      <FollowerCard followers={this.state.followers}/>
      </div>
    )
  }
}

export default App;
