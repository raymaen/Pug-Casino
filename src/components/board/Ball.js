import React, { Component } from "react";
import { connect } from "react-redux";

import { updateBidData } from "../../actions/gameActions";

export class Ball extends Component {
  handleClick = type => {
    let amount = this.props.bidAmount;
    if (type !== "add") amount *= -1;
    this.props.updateBidData(this.props.id, Number(amount));
  };

  render() {
    const imgUrl = require(`../../assets/img/${this.props.ball.img}.png`);
    return (
      <div className="ball">
        <div>
          <img src={imgUrl} style={{ width: "60px" }} alt="" />
        </div>
        <i
          className="fas fa-plus"
          onClick={this.handleClick.bind(this, "add")}
        />
        <i
          className="fas fa-minus"
          onClick={this.handleClick.bind(this, "decrement")}
        />
        <h6>{this.props.amount} $</h6>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    bidAmount: state.game.bidAmount,
    amount: state.game.bidData[ownProps.id]
  };
};

const mapDispatchToProps = dispatch => ({
  updateBidData: (ballId, amount) => dispatch(updateBidData(ballId, amount))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ball);
