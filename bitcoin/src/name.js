import React, { Component } from "react";

class Name extends Component {
    
  state = {
    myName : '길동',
    what : '너의 이름은'
  };

  handleClick = () => {
    this.setState({
      myName : '성은',
      what : '아니야 내 이름은'
    })
  }

  render (){
    return (
      <div className="Crypto">
        <p>{this.state.what} {this.state.myName}</p>
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}

export default Name
