import React from 'react';

const UserCard = props => {
    return (
        <div>
            <img src={props.user.avatar_url} alt= "picture" />
            <div>
                <p>Name: {props.user.name}</p>
                <p>User Name: {props.user.login}</p>
                <p>Following: {props.user.following}</p>
                <p>Followers: {props.user.followers}</p>
            </div>
        </div>
    );
}

export default UserCard;