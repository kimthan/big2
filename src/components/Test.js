import React, { Component } from 'react';
import './test.css'
class Test extends Component {

    handleClick(e){
      e.target.classList.add('selected')
        
        
    }
    render() {

    
        return (
            <div>
                <div className="selectedItems">
                <img
                   
                   src="./img/2h.png" className="testimg" />
                   <img
                   
                   src="./img/2h.png" className="testimg" />
                   <img
                   
                   src="./img/2h.png" className="testimg" />
                </div>
                <div className="testparent">
                 <div className="testchild">
                    <img
                    onClick={this.handleClick.bind(this)}
                    src="./img/2h.png" className="testimg" />
                 </div>
                 <div className="testchild">
                    <img onClick={this.handleClick.bind(this)} src="./img/2h.png" className="testimg" />
                 </div>
                 <div className="testchild">
                    <img onClick={this.handleClick.bind(this)} src="./img/2h.png" className="testimg" />
                 </div>
                 <div className="testchild">
                    <img onClick={this.handleClick.bind(this)} src="./img/2h.png" className="testimg" />
                 </div>
                 <div className="testchild">
                    <img onClick={this.handleClick.bind(this)} src="./img/2h.png" className="testimg" />
                 </div>
                 <div className="testchild">
                    <img onClick={this.handleClick.bind(this)} src="./img/2h.png" className="testimg" />
                 </div>
                </div>
            </div>
        );
    }
}

export default Test;