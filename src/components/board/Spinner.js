import React, { Component } from "react";
import { connect } from "react-redux";

import {
  readSpinnerResult,
  gameRunningConfig, 
  updatePugLine,
  updateHistory
} from "../../actions/gameActions";
import imgUrl from "../../assets/img/spinner.png";
import { spinnerData } from "../../assets/consts/spinnerData";

class Spinner extends Component {
  state = {
    rotateHistory: 0,
    dif: 360 / 54,
    currentLocation: 0
  };

  makeRotation = () => {
    // Break if the spinner is already active

    // More reliable

    if (this.props.gameIsRunning) {
      console.log("Wait! the game is running");
      return;
    }

    console.log(this.props.totalBid);

    if (this.props.totalBid < 5) {
      console.log("Add a minimum of 5 $");
      this.props.updatePugLine('Add a minimum of 5 $')
      return;
    }

    // 1: Get a random number that will result in the winning number
    const randRotate = Math.ceil(Math.random() * 54);
    // const randRotate = 0

    // 2: Get the location of the winning number
    const selected = this.state.currentLocation + randRotate;

    // 3: Translate the winning locadion to deg
    const newRotateDeg =
      this.state.dif * randRotate + 2160 + this.state.rotateHistory;

    // 4: Rotate the spinner by the relevant degree
    document.getElementById("spinner").style.transform = `rotate(${-1 *
      newRotateDeg -
      0.9}deg)`;

    // Update the rotation history - it will hold the current degree
    this.setState({
      rotateHistory: newRotateDeg
    });

    // If the winning index is bigger than the amount of numbers ,
    // Decrement 54 (the total amount of numbers) to reset it
    if (this.state.currentLocation + randRotate <= 53) {
      this.setState({
        currentLocation: this.state.currentLocation + randRotate
      });
    } else {
      this.setState({
        currentLocation: this.state.currentLocation + randRotate - 54
      });
    }

    // Tell redux that the object is now spinning , preventing
    // unwanted ui actions
    this.props.gameRunningConfig(true);


    // Update the pug line
    this.props.updatePugLine(
      Math.random() * 100 > 50 ? 
    'This is exiting.... Hope I getz your money haha' :
    'Letz the game begin' 
    )

    // This chunk of code will be executed after the spinner has stopped
    setTimeout(() => {
      this.props.readSpinnerResult(spinnerData[this.state.currentLocation]);
    }, 14100);

    // User cant start again emmidietly
    setTimeout(() => {
      this.props.gameRunningConfig(false);
    }, 17000);

    // Tell redux that the spinner has stopped and enable ui actions
  };

  render() {
    const spinnerImg = (
      <img src={imgUrl} id="spinner" className="spinner" width="" />
    );
    return (
      <div className="spinner-container text-center">
       <button
          onClick={this.makeRotation.bind(this)}
          className="btn btn-lg  spin d-block mx-auto mb-3 mt-5"
        >
          SPIN ! 
     
        </button>
      
     
        {spinnerImg}
        <i class="fas fa-angle-left"></i>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gameIsRunning: state.game.gameIsRunning,
  totalBid: Object.values(state.game.bidData).reduce(
    (partial_sum, a) => partial_sum + a,
    0
  )
});

const mapDispatchToProps = dispatch => ({
  readSpinnerResult: res => dispatch(readSpinnerResult(res)),
  gameRunningConfig: isRunning => dispatch(gameRunningConfig(isRunning)),
  updatePugLine : line => dispatch(updatePugLine(line)),
  updateHistory : data => dispatch(updateHistory(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Spinner);
