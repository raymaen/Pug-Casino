import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Execute extends Component {
 

  render() {
    return (
      <div className="execute">
        <button className="btn hit-jackpot">Hit Jackpot!</button> 
        <i className="fas fa-undo-alt"></i>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Execute)
