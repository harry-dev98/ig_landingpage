import React from 'react';
import './Content.css';

import {
    Card,
} from './util';

function WhatWeDo() {
    return (
        <div className='what-we-do' >
            <p>What We DO</p>
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
        </div>
    );
}



export default class Content extends React.PureComponent {
    render() {
        return (
            <div>
                <WhatWeDo />
                <Events />
                <AboutUs />
            </div>
        )
    }
}