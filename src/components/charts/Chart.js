import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import TalkingPug from "./TalkingPug";
import LastGame from "./LastGame";

export class Chart extends Component {
  render() {
    const history = this.props.history;
    const lastGame = history.length > 0 ? <LastGame data={history[0]} /> : null;
   
    return (
      <Fragment>
        <TalkingPug />
        <div className="help">
          <i class="fas fa-question-circle" />
        </div>

        <div className="chart text-center">
        {/* <h1>History: </h1> */}
          {history.map((data ,index)=> {if(index < 5) return ( <LastGame data={data} /> )})}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  history: state.game.history
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chart);
