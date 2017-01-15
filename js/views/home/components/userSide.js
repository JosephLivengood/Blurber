var React = require('react');
var ReactDOM = require('react-dom');

import { truncate } from '../common/common.js';
import FriendsGrid from './userSide.friends.js';

export default class UserSide extends React.Component {
    render() {
        return (
            <div className='col-sm-3 col-xl-2 userSide'>
                <ProfilePhoto photo={this.props.user.profile_photo} />
                <UserInfo user={this.props.user} />
                <BlurbStats user={this.props.user} />
                <FriendsGrid userId={this.props.user.user_id}/>
            </div>
        );
    }
}

class ProfilePhoto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {photo: this.props.photo}
        this.changeImage = this.changeImage.bind(this);
    }
    changeImage() {
        alert('Testing, image should delete.');
        this.setState({photo: ''});
    }
    render() {
        return(
            <img className='profilePhoto' src={this.state.photo} onClick={this.changeImage}/>
        );
    }
}

class UserInfo extends React.Component {  
    render() {
        return (
            <div>
                <h3>{this.props.user.name}</h3>
                <UserInfoDetails user={this.props.user}/>
            </div>
        );
    }
}

class UserInfoDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {truncate: true, text: this.props.user.bio};
        this.expandText = this.expandText.bind(this);
        this.displayText = this.expandText.bind(this);
    }
    expandText() {
        this.setState({truncate: !this.state.truncate});
    }
    render() {
        var text = (this.state.truncate) ? truncate(this.state.text,220) : this.state.text;
        return (
            <div>
                <h5>{this.props.user.location}</h5>
                <p className='profileBio' onClick={this.expandText}>{text}</p>
                <UserRole role={this.props.user.role} />
            </div>
        );
    }
}

class UserRole extends React.Component {
    render() {
        var style = {
            color: 'red',
            fontFamily: 'monospace',
            fontSize: 9
        }
        switch(this.props.role) {
            case 'admin':
                return <p style={style}>You are an Admin.</p>;
            case 'mod':
                return <p style={style}>You are a Moderator.</p>;
            default:
                return;
        }
    }
}

class BlurbStats extends React.Component {
    render() {
        return (
            <div className='row blurbStats'>
                <div className='col-xs-4'>
                    <p>✪{this.props.user.blurb_count}</p>
                </div>
                <div className='col-xs-4'>
                    <p>✪{this.props.user.reblurb_count}</p>
                </div>
                <div className='col-xs-4'>
                    <p>✪{this.props.user.reblurbed_count}</p>
                </div>
            </div>
        );
    }
}