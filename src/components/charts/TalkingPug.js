import React, { Component } from 'react'
import { connect } from 'react-redux'

import pugImg from '../../assets/img/talking-pug.png'

export class TalkingPug extends Component {
 

  render() {
    return (
      <div className="pug-container">
       <img src={pugImg} alt=""/>
      <p>{this.props.pugLine}
      <br/>
      <br/>
      <strong> Mr.Pug's balance : {this.props.pugBalance} $</strong>
    
      </p>
      
       
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  pugLine : state.game.pugLine,
  pugBalance : 25000 + 1500 - state.game.balance - Object.values(state.game.bidData).reduce(
    (partial_sum, a) => partial_sum + a,
    0
  )
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(TalkingPug)
