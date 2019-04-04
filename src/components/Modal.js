import React, { Component } from 'react'
import { connect } from 'react-redux'
import Food from './Food'
import { closeModal } from '../actions/index'

class Modal extends Component {

  closeWindow = () => {
    this.props.closeModal()
  }

  render () {
    const showHide = this.props.show ? 'modal' : 'no-modal'

    return (
      <div className={showHide}>
        <div className='modal-form'>
          <div className='close' onClick={this.closeWindow}>
            &otimes;
          </div>
          <Food />
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    show: state.show
  }), {
    closeModal
  }
)(Modal)
