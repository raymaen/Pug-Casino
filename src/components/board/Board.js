import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Odometer from "./Odometer";
import Spinner from './Spinner'
import BiddingList from './BiddingList';
import Execute from './Execute'

export class Board extends Component {
  render() {
    return (
      <Fragment>
        {/* <Execute /> */}
        <Spinner />
        <BiddingList />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
