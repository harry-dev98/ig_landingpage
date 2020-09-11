import React from 'react';

import './Card.css';

const link = "https://raw.githubusercontent.com/harry-dev98/ig_landingpage/master/src/";

export default class Card extends React.PureComponent{
    state = {
        img: this.props.imgs[0],
        index: 0,
        isDetailed: false,
    }
    leftEvent = ()=>{
        let index = this.state.index - 1;
        index = (index + this.props.imgs.length)%this.props.imgs.length;
        this.setState({
            img: this.props.imgs[index],
            index: index,
        });
    }
    rightEvent = ()=>{
        let index = this.state.index + 1;
        index = (index)%this.props.imgs.length;
        this.setState({
            img: this.props.imgs[index],
            index: index,
        });
    }
    toggleDetails = ()=>{
        this.setState({
            isDetailed: 1 - this.state.isDetailed,
        });
    }

    render(){
        let img = link+this.state.img.src;
        let content = undefined;
        if(!this.state.isDetailed){
            content = (
                <div className="card" >
                    <div className="left" onClick={this.leftEvent} >
                    </div>
                    <div className="card-content" onClick={this.toggleDetails}>
                        <img src={img} className="card-image" alt='events' />
                    </div>
                    <div className="right" onClick={this.rightEvent} alt='events' >
                    </div>
                </div>
            );
        } else {
            content = (
                <div className="card" >
                    <div className="card-content" onClick={this.toggleDetails} >
                        {/* <img src={img} className="card-image" style={{ opacity: 0.5 }} /> */}
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div> 
            );
        }
        return content;
    }
}