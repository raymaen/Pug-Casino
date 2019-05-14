import React, { Component } from "react";
import { connect } from "react-redux";

import {updateBidAmount} from '../../actions/gameActions'
import BiddingItem from "./BiddingItem";

export class ToggleBet extends Component {
 
  handleClick = id => {
    if(!this.props.gameIsRunning)
    this.props.updateBidAmount(id.split('-')[1])
  };

  render() {
    return (
      <div className="toggle-bet">
        <div className="toggle-value">
          <h6>{this.props.bidAmount} $</h6>
        </div>

        <div className="toggle-list">
          {this.props.biddingitemsIds.map(id => (
            <BiddingItem
              key={id}
              id={id}
              handleClick={this.handleClick}
              selected={id === this.props.selectedId ? "selected" : "bullet"}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  bidAmount: state.game.bidAmount,
  selectedId: `bidding-${state.game.bidAmount}`,
  biddingitemsIds: [
    "bidding-100",
    "bidding-50",
    "bidding-20",
    "bidding-10",
    "bidding-5"
  ] ,
  gameIsRunning : state.game.gameIsRunning
});

const mapDispatchToProps = dispatch => ({
  updateBidAmount : (amount) => dispatch(updateBidAmount(amount))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToggleBet);
