import React from 'react';
import {
  Header,
  Footer,
} from './util';
import './Root.css';

class Root extends React.Component{
    state = {
      activeHeader: true,
    }
    toggleBody = ()=>{
      this.setState({
        activeHeader: 1 - this.state.activeHeader,
      });
    }
    render(){
        return (
          <div className="Root">
            <Header toggleBody={ this.toggleBody }/>          
            {!this.state.activeHeader?
              <div style={{ minHeight: '77.5vh' }}>
                <h1 style={{ color: 'yellow' }}>This is Body</h1>
              </div>: <></>}
            <Footer />
          </div>
        );
    }
}

export default Root;
