import React from 'react';
import styled from "styled-components";

class FollowerCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            following: []
        }
    }

    render() {
        return (
            this.props.followers.map( item => {
                console.log(item);
                return (
                    <StyledDiv1>
                        <StyledImg src={item.avatar_url} alt= "picture" />
                        <StyledDiv2>
                        <p>User Name: {item.login}</p>
                        <p>ID: {item.id}</p>
                        <p>Node ID: {item.node_id}</p>
                        </StyledDiv2>
                    </StyledDiv1>
                )
            }
           )
        )
}
}

const StyledDiv1 = styled.div`
display: flex;
margin: 2%;
padding: 2%;
background-color: #6495ED;
width: 20%;
height: 30%;
flex-direction: column;
justify-content: center;
`;

const StyledDiv2 = styled.div`
display: flex;
flex-direction: column;
`;

const StyledImg = styled.img`
height: 40vh;
`

export default FollowerCard;