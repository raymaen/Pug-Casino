import React, { Component, Fragment } from "react";

import Spinner from './Spinner'
import BiddingList from './BiddingList';


export class Board extends Component {
  render() {
    return (
      <Fragment>
        <Spinner />
        <BiddingList />
      </Fragment>
    );
  }
}



export default Board
