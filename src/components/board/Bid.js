import React, { Component } from "react";
import { connect } from "react-redux";

import { updateBidData } from "../../actions/gameActions";
import numberColorData from "../../assets/consts/numberColorData";

export class Bid extends Component {
  handleClick = type => {
    let amount = this.props.bidAmount;
    if (type !== "add") amount *= -1;
    if (!this.props.gameIsRunning)
      this.props.updateBidData(this.props.id, Number(amount));
  };

  render() {
    return (
      <div className="bid">
        <div>
          <h4
            style={{
              color: numberColorData[this.props.bid.id],
              textShadow: `0 0 5px ${numberColorData[this.props.bid.id]}`
            }}
          >
            {this.props.bid.id} x
          </h4>
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
    amount: state.game.bidData[ownProps.id],
    gameIsRunning: state.game.gameIsRunning
  };
};

const mapDispatchToProps = dispatch => ({
  updateBidData: (bidId, amount) => dispatch(updateBidData(bidId, amount))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bid);
