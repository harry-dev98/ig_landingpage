import React from 'react';
import {
  Header,
  Footer,
  Content,
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
              <Content />:
              <Footer />
            }
            
          </div>
        );
    }
}

export default Root;
