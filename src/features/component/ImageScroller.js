import React from 'react';

const link = "https://raw.githubusercontent.com/harry-dev98/ig_landingpage/master/src/";

export default class ImageScroller extends React.PureComponent {
    state = {
        img: this.props.img[0],
    }
    componentDidMount(){

    }
    render(){
        console.log(this.state.img, "../../static/1.jpg");
        // var img = require(this.state.img);
        return (
           <div className="scroller">
               <img src={link+this.state.img.src} alt='events' />
           </div> 
        );
    }
}