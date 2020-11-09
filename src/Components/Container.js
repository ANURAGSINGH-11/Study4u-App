import React, { Component } from 'react'
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Platforms from './Platforms';
import Contact from './Contact';
import Career from './Career';
class Container extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           link:''
        }
      }
      changeRender=(data)=>{
        this.setState({
            link:data
        })
    }
    render() {
        if(this.state.link==='home'){
            return(
                <div>
                    <Navbar linkClick={this.changeRender} />
                    <Home />
                </div>
            );
        }
        else if(this.state.link==='about'){
            return(
                <div>
                    <Navbar linkClick={this.changeRender} />
                    <About />
                </div>
            );
        }
        else if(this.state.link==='platforms'){
            return(
                <div>
                    <Navbar linkClick={this.changeRender} />
                    <Platforms />
                </div>
            );
        }
        else if(this.state.link==='contact'){
            return(
                <div>
                    <Navbar linkClick={this.changeRender} />
                    <Contact />
                </div>
            );
        }
        else if(this.state.link==='career'){
            return(
                <div>
                    <Navbar linkClick={this.changeRender} />
                    <Career />
                </div>
            );
        }
        else if(this.state.link===''){
            return(
                <div>
                    <Navbar linkClick={this.changeRender} />
                    <Home />
                </div>
            );
        }
    }
}

export default Container
