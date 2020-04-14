import React from 'react';

const UserCard = props => {
    return (
        <div>
            <img src={props.user.html_url} />
            <div>
                <p>Name: {props.user.name}</p>
                <p>UserName: {props.user.login}</p>
                <p>Location: {props.user.location}</p>
                <p>Bio: {props.user.bio}</p>
                <p>Following: {props.user.following}</p>
                <p>Followers: {props.user.followers}</p>
            </div>
        </div>
    );
}

export default UserCard;