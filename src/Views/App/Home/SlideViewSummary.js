import React from 'react';
import { Modal } from '../../../Common/Components/Modal';
import { connect } from 'react-redux';
import { INPUT_LABEL } from '../../../Common/Constants/StringConstants';
import { toggleModal } from '../../../Actions/Slide';
/**
 * Functional Component but like smart component instead of like other component redux HOC directly written here
 * 
 */
const Summary = ({ toggleModal, viewedSlides, showSummary }) => {
  return <Modal visible={showSummary}
    onCancel={()=>toggleModal()}
    title={INPUT_LABEL.SLIDE_SUMMARY} footer={null}>
    <div className='view-summary'>
      Here is Summary of Slide View
          <ul>
        {
          viewedSlides.map(num => <li>{num}</li>)
        }
      </ul>
    </div>
  </Modal>;
}
const mapStateToProps = state => {
  console.log('** Sumary',state)
  return {
    viewedSlides: state.viewedSlides,
    showSummary: state.showSummary,
  }
}

const mapDispatchToProps = dispatchEvent => {
  return {
    toggleModal: () => dispatchEvent(toggleModal()),
  }
}
export const SlideSummary = connect(mapStateToProps, mapDispatchToProps)(Summary)