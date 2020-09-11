import React from 'react';
import './Content.css';

import {
    Card,
} from './util';

import {img1} from './config';

function WhatWeDo() {
    return (
        <div className='what-we-do' >
            <p>What We DO</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    );
}

function Events({imgs}){
    return (
        <div className='events' >
            <Card imgs={ imgs }/>
        </div>
    );
}


function AboutUs() {
    return (
        <div className='about-us' >
            <p>AboutUs</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    );
}



export default class Content extends React.PureComponent {
    render() {
        return (
            <div>
                <WhatWeDo />
                <Events imgs={img1} />
                <AboutUs />
            </div>
        )
    }
}