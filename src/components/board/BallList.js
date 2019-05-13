import React, { Component } from "react";
import { connect } from "react-redux";

import Ball from "./Ball";

export class BallList extends Component {
  render() {
    return (
      <div className="ball-list d-flex justify-content-center ">
        {this.props.balls.map(ball => (
          <Ball ball={ball} key={ball.id} id={ball.id} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  balls: state.game.balls
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BallList);
