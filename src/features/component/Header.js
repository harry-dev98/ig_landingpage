import React from 'react';
import './Header.css';
import logo from '../../static/logo.jpeg';
import bulb from '../../static/bulb.png';
import {
    ImageScroller,
} from './util';
import {
    img1,
    img2
} from './config';

export default class Header extends React.PureComponent{
    state={
        clickonlogo: false,
    }
    toggleHeader = ()=>{
        this.setState({
            clickonlogo: 1 - this.state.clickonlogo,
        });
        this.props.toggleBody();
    }
    render(){
        let prefix = this.state.clickonlogo?"after-click-":"";
        return (
            <header className={ prefix + "header" }>
                <div style={{display:'flex'}}>
                    <h3 className={ prefix + "heading-1" }>INNOVATION</h3>
                    <img src={bulb} className={ prefix + "bulb" } alt="bulb" />
                </div>
                {this.state.clickonlogo?
                    <img onClick={this.toggleHeader} src={logo} className={ prefix + "logo" } alt="logo" />:
                    <div style={{display: 'inline-flex', justifyContent: 'space-between', width: '100%'}}>
                        <ImageScroller style={{ justifySelf: 'left' }} img={img1} />
                        <img onClick={this.toggleHeader} src={logo} className={ prefix + "logo" } alt="logo" />
                        <ImageScroller style={{ justifySelf: 'right' }} img={img2} />
                    </div>
                }
                <h3 className={ prefix + 'heading-2' }>GARAGE</h3>
            </header>
        )
    }
}