var React = require('react');
var ReactDOM = require('react-dom');

export default class BlurbSide extends React.Component {
    render() {
        return (
            <div className='col-sm-8 col-xl-9 blurbSide'>
                <NewBlurb />
                <BlurbContainer blurbs={this.props.blurbs} />
            </div>
        );
    }
}

class NewBlurb extends React.Component {
    
    
    render() {
        
        return (
            <div>
                <h2>New Blurb</h2>
            </div>
        );
    }
}

class BlurbContainer extends React.Component {
    render() {
        const blurbs = this.props.blurbs.blurbs;
        console.log(blurbs);
        const listBlurbs = blurbs.map((blurb) =>
            <Blurb key={blurb.user_id} blurb={blurb} /> );
        return (
            <div className='blurbContainer'>
                {listBlurbs}
            </div>
        );
    }
}

class Blurb extends React.Component {
    
    
    render() {
        return (
            <div className='row blurbBox'>
                <div className='col-xs-3 col-md-2 blurb'>
                    <img src={this.props.blurb.profile_photo} />
                </div>
                <div className='col-xs-9 col-md-10 blurb'>
                    <h4>{this.props.blurb.name}</h4>
                    <p>{this.props.blurb.text}</p>
                    {this.props.blurb.code != '' &&
                        <pre>{this.props.blurb.code}</pre>
                    }
                </div>
            </div>
        );
    }
}
