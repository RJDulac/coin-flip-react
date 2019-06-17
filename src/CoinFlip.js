import React, { Component } from "react";
import Coin from "./Coin";
import heads from "./img/heads.jpg";
import tails from "./img/tails.jpg";
import "./CoinFlip.css";

class CoinFlip extends Component {
  state = {
    isheads: true,
    flips: 0,
    heads: 0,
    tails: 0,
    imageFlip: heads
  };
  //methods
  //flip counter
  incrementFlips = curState => {
    return { flips: curState.flips + 1 };
  };
  //heads counter
  incrementHeads = curState => {
    return { heads: curState.heads + 1 };
  };
  //tails counter
  incrementTails = curState => {
    return { tails: curState.tails + 1 };
  };
  //toggle isHeads
  toggleHeads = () => {
    this.setState(prevState => ({
      isheads: !prevState.isheads
    }));
  };
  toggleImage = () => {
    return this.state.isheads
      ? this.setState({ imageFlip: heads })
      : this.setState({ imageFlip: tails });
  };
  //handlers
  flipHandler = () => {
    this.toggleImage();
    // this.setState(this.toggleHeads);
    this.toggleHeads();
    this.setState(this.incrementFlips);

    this.state.isheads
      ? this.setState(this.incrementHeads, this.changeHeads)
      : this.setState(this.incrementTails, this.changeTails);
  };
  //randomly flip image -- turn this into different app that does coin tossing
  randomHandler = () => {
    let result = Math.floor(Math.random() * 2) + 1;
    console.log(result);
    return result === 1
      ? this.setState({ imageFlip: heads })
      : this.setState({ imageFlip: tails });
  };
  render() {
    return (
      <div>
        <Coin face={this.state.imageFlip} />
        <button className="btn" onClick={this.flipHandler}>
          Flip Me!
        </button>
        <p>
          Out of {this.state.flips} there have been {this.state.heads} heads and{" "}
          {this.state.tails} tails
        </p>
        <button className="btn" onClick={this.randomHandler}>
          Toss me!
        </button>
      </div>
    );
  }
}
export default CoinFlip;
