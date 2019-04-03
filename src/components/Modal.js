import React, { Component } from 'react'
import { connect } from 'react-redux'
import Food from './Food'

class Modal extends Component {
  render () {
    const showHide = this.props.show ? 'modal' : 'no-modal'

    return (
      <div className={showHide}>
        <Food />
      </div>
    )
  }
}

export default connect(
  (state) => ({
    show: state.show
  })
)(Modal)
