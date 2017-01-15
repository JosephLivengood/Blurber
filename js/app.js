var React = require('react');
var ReactDOM = require('react-dom');

import HomeWrapper from './views/home/components/main.js';

/*
* SAMPLE DATA IN FORMAT FROM API RES
*/

var user1 = {
    user_id: 1,
    name: 'Joseph Livengood',
    location: 'Noblesville, Indiana',
    profile_photo: 'http://placehold.it/180x180',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum vitae nibh at sodales. Aenean enim felis, mollis ac posuere sed, dignissim in augue. Nam molestie ullamcorper justo nec maximus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed vitae lacus et tellus efficitur laoreet. Donec et metus gravida, accumsan arcu vel, fringilla nibh. Aenean vitae mi nec nibh posuere fermentum id at dolor. Proin fermentum lorem sit amet odio vestibulum, id finibus nibh mattis. Nunc vel odio velit. Fusce interdum at nisi ut mattis. Donec commodo consectetur consequat.',
    role: 'admin',
    blurb_count: 12,
    reblurbed_count: 137,
    reblurb_count: 35
}

var blurbs1 = {
    blurbs: [
        {
            user_id: 1,
            name: 'Joseph Livengood',
            profile_photo: 'http://placehold.it/180x180',
            text: 'Welcome to the site! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum vitae nibh at sodales. Aenean enim felis, mollis ac posuere sed, dignissim in augue. Nam molestie ullamcorper justo nec maximus.',
            date: new Date(),
            reblurbed: 3,
            code: `class App extends React.Component {
    render() {
        return (
            <div>
                <Header title="Blurber" />
                <HomeWrapper user={user1} blurbs={blurbs1} />
            </div>
        );
    }
}`
        },
        {
            user_id: 2,
            name: 'Tim Cook',
            profile_photo: 'http://i1-news.softpedia-static.com/images/news2/apple-s-ceo-tim-cook-is-boring-and-incompetent-internet-guru-says-510058-2.jpg',
            text: 'Mauris condimentum vitae nibh at sodales. Welcome to the site 2!',
            date: new Date(),
            reblurbed: 0,
            code: 'console.log("Hello World 2!");'
        },
        {
            user_id: 3,
            name: 'Mark Zuckerberg',
            profile_photo: 'http://media.salon.com/2015/04/shutterstock_181985711-e1449168898686.jpg',
            text: 'Mauris condimentum vitae nibh at sodales. Welcome to the site 2! Aenean vitae mi nec nibh posuere fermentum id at dolor. Proin fermentum lorem sit amet odio vestibulum, id finibus nibh mattis. Nunc vel odio velit.',
            date: new Date() +1,
            reblurbed: 0,
            code: ''
        },
        {
            user_id: 4,
            name: 'Warren Buffett',
            profile_photo: 'http://www.investwithalex.com/wp-content/uploads/2015/03/warren-buffett-letter.jpg',
            text: 'Mauris condimentum vitae nibh at sodales. Welcome to the site 2!',
            date: new Date() +5,
            reblurbed: 0,
            code: `class BlurbContainer extends React.Component {
    render() {
        const blurbs = this.props.blurbs.blurbs;
        console.log(blurbs);
        const listBlurbs = blurbs.map((blurb) =>
            <Blurb key={blurb.user_id*blurb.date} blurb={blurb} /> );
        return (
            <div className='blurbContainer'>
                {listBlurbs}
            </div>
        );
    }
}`
        },
        {
            user_id: 20,
            name: 'Tim Cook',
            profile_photo: 'http://i1-news.softpedia-static.com/images/news2/apple-s-ceo-tim-cook-is-boring-and-incompetent-internet-guru-says-510058-2.jpg',
            text: 'This is working!',
            date: new Date(),
            reblurbed: 0,
            code: 'assert.isDefined(website);'
        },
        
    ]
}

class Header extends React.Component {
    render() {
        return <header><h1>{this.props.title}</h1></header>
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Header title="Blurber" />
                <HomeWrapper user={user1} blurbs={blurbs1} />
            </div>
        );
    }
}

ReactDOM.render(<App/>,  document.getElementById("app"));