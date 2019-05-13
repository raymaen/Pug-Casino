import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Odometer from "./Odometer";
import BallList from './BallList';
import Execute from './Execute'

export class Board extends Component {
  render() {
    return (
      <Fragment>
        <Odometer />
        <BallList />
        <Execute />
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
