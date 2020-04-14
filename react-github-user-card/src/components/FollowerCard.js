import React from 'react';

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
                return (
                    <div>
                        <img src={item.avatar_url} alt= "picture" />
                        <div>
                        <p>Name: {item.name}</p>
                        <p>User Name: {item.login}</p>
                        <p>Following: {item.following}</p>
                        <p>Followers: {item.followers}</p>
                        </div>
                    </div>
                )
            }
           )
        )
}
}

export default FollowerCard;