import React, { Component } from 'react'

export class LastGame extends Component {
  render() {
      const text = this.props.data.win 
      ? `You won ${this.props.data.total} $ !` 
      : `You lost ${this.props.data.total} $ .`

      const color = this.props.data.win 
      ? 'rgb(91, 175, 91)' 
      : 'rgb(207, 119, 119)'
    return (
      <div className="last-game">
        {/* <h2>Last game : </h2> */}
        <h3 style={{color : color}}>{text}</h3>
        <h6 className="text-white">Winning number: <strong>{this.props.data.winningNumber}</strong></h6>
      </div>
    )
  }
}

export default LastGame
