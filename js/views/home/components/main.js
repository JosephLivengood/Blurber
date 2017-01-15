var React = require('react');
var ReactDOM = require('react-dom');

import UserSide from './userSide.js';
import BlurbSide from './blurbSide.js';

export default class HomeWrapper extends React.Component {
    render() {
        return (
            <div>
                <div className='row'>
                    <UserSide user={this.props.user} />
                    <BlurbSide user={this.props.user} blurbs={this.props.blurbs}/>
                </div>
            </div>
        );
    }
}