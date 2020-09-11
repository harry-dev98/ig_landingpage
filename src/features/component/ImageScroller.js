import React from 'react';
import './ImageScroller.css';
const link = "https://raw.githubusercontent.com/harry-dev98/ig_landingpage/master/src/";

export default class ImageScroller extends React.PureComponent {
    state = {
        img: this.props.img[0],
        index: 0,
    }
    interval = undefined;
    componentDidMount(){
        this.interval = setInterval(()=>{
            this.setState({
                img: this.props.img[(this.state.index+1)%this.props.img.length],
                index: this.state.index+1,
            });
        }, 5000);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
        this.interval = undefined;
    }
    render(){
        return (
           <div className="scroller" style={this.props.style}>
               <img className="scroller-image" src={link+this.state.img.src} alt='events' />
           </div> 
        );
    }
}