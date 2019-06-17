import React, { Component } from "react";
import heads from "./img/heads.jpg";

class Coin extends Component {
  static defaultProps = {
    face: heads
  };
  render() {
    return (
      <div>
        <img src={this.props.face} alt="coin" />
      </div>
    );
  }
}
export default Coin;
