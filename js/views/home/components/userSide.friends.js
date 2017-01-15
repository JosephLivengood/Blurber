var React = require('react');
var ReactDOM = require('react-dom');

import { truncate } from '../common/common.js';

//SAMPLE DATA
var friends1 = {
    friends: [{
        user_id: 2,
        name: 'Tim Cook',
        profile_photo: 'http://i1-news.softpedia-static.com/images/news2/apple-s-ceo-tim-cook-is-boring-and-incompetent-internet-guru-says-510058-2.jpg'
    },{
        user_id: 3,
        name: 'Mark Zuckerberg',
        profile_photo: 'http://media.salon.com/2015/04/shutterstock_181985711-e1449168898686.jpg'
    },{
        user_id: 4,
        name: 'Warren Buffett',
        profile_photo: 'http://www.investwithalex.com/wp-content/uploads/2015/03/warren-buffett-letter.jpg'
    }]
}

export default class FriendsGrid extends React.Component {
    render() {
        const friends = friends1.friends;
        const listFriends = friends.map((friend) =>
            <FriendIcon key={friend.user_id}
                name={friend.name}
                userId={friend.user_id}
                profilePhoto={friend.profile_photo} /> );
        return (
            <div className='row friendGrid'>
                <div className='col-xs-12'>
                    <h5>Following {friends.length}...</h5>
                </div>
                {listFriends}
                <div className='col-xs-12'>
                    <input type="text" placeholder="Search friends..." />
                </div>
            </div>
        );
    }
}

class FriendIcon extends React.Component {
    render() {
        return (
            <div className='col-xs-6 friendIcon'>
                <img src={this.props.profilePhoto} />
                <p>{this.props.name}</p>
            </div>
        );
    }
}