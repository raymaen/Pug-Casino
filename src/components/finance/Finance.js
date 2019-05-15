import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Balance from "./Balance";
import ToggleBet from "./ToggleBet";

export class Finance extends Component {
  render() {
    return (
      <Fragment>
        <Balance balance={this.props.balance} />
        <ToggleBet />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  balance: state.game.balance
});



export default connect(
  mapStateToProps
)(Finance);
