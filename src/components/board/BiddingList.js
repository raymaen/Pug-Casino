import React, { Component } from "react";
import { connect } from "react-redux";

import Bid from "./Bid";

export class BiddingList extends Component {
  render() {
    return (
      <div className="bidding-list d-flex justify-content-center ">
        {this.props.bids.map(bid => (
          <Bid bid={bid} key={bid.id} id={bid.id} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  bids: state.game.balls
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BiddingList);
