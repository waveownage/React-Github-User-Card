import React from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import FollowerCard from "./components/FollowerCard";
import axios from "axios";
import styled from "styled-components";

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
        this.setState({ user: res.data });
      })
      .catch(err => console.log("ERROR!", err));

    axios
      .get(`https://api.github.com/users/waveownage/followers`)
      .then(res => {
        this.setState({ followers: res.data });
      })
      .catch(err => console.log("ERROR!", err));
  }
  render() {
    return (
      <StyledDiv1>
        <h1>REACT GITHUB USER CARD</h1>
        <UserCard user={this.state.user} />
        <h2>FOLLOWERS</h2>
        <FollowerCard followers={this.state.followers} />
      </StyledDiv1>
    );
  }
}

const StyledDiv1 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default App;
