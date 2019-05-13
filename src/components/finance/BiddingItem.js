import React from "react";

export default function BiddingItem(props) {
  const classFromProps = `bidding-item ${props.selected}`;
  return <div className={classFromProps} onClick={props.handleClick.bind(this , props.id)}/>;
}
