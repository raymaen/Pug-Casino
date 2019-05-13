import React from "react";

export default function Balance(props) {
  return (
    <div className="balance text-center">
      <h5>Balance : {props.balance} $</h5>
    </div>
  );
}
