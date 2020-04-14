import React from "react";
import styled from "styled-components";

const UserCard = props => {
  return (
    <StyledDiv1>
      <StyledDiv3>
        <img src={props.user.avatar_url} alt="picture" />
        <StyledDiv2>
          <p>Name: {props.user.name}</p>
          <p>User Name: {props.user.login}</p>
          <p>Following: {props.user.following}</p>
          <p>Followers: {props.user.followers}</p>
        </StyledDiv2>
      </StyledDiv3>
      <img
        src="http://ghchart.rshah.org/waveownage"
        alt="Andre's Github chart"
      />
    </StyledDiv1>
  );
};

const StyledDiv3 = styled.div`
  display: flex;
  margin: 2%;
  padding: 2%;
  background-color: #6495ed;
  width: 20%;
  height: 30%;
  flex-direction: column;
  justify-content: center;
`;
const StyledDiv2 = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledDiv1 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export default UserCard;
