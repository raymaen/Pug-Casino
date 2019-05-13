import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

export class History extends Component {
  render() {
    return (
        <Fragment>
        <h1>History</h1>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History);
