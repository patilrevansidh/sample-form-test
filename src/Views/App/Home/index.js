import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { SlideDropdown } from './SlideDropdown';
import { setSlidePosition, setSlideCount, toggleModal } from '../../../Actions/Slide';
import { CarouselView } from './Carousel';
import { Button } from 'antd';
import './home.scss';
import { SlideSummary } from './SlideViewSummary';

class SlideList extends React.Component {
  handleSlideSelection = (value) => this.props.setSlideCount(value);

  handlePositionChange = ({ target }) => this.props.setSlidePosition(target.value);

  handleFinish = () => this.props.toggleModal();

  render() {
    if (false) {
      return <Redirect to='/login' />
    }
    const { slidePosition, currentCount } = this.props;
    return (
      <div className='home-container'>
        <div className='slide-list-container'>
          <div className='slide-view'>
            <SlideDropdown onPositionChange={this.handlePositionChange} slidePosition={slidePosition}
              slideCount={currentCount} onSlideSelection={this.handleSlideSelection} />
            <CarouselView currentCount={currentCount} slidePosition={slidePosition} />
            <div className='finish-btn-holder'>
              {
                <Button disabled={!currentCount} onClick={this.handleFinish} type="primary" size='large'>
                  Finish
                </Button>
              }
              <SlideSummary />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn,
    slidePosition: state.slidePosition,
    currentCount: state.currentCount,
  }
}

const mapDispatchToProps = dispatchEvent => {
  return {
    setSlidePosition: slidePosition => dispatchEvent(setSlidePosition(slidePosition)),
    setSlideCount: slideCount => dispatchEvent(setSlideCount(slideCount)),
    toggleModal: () => dispatchEvent(toggleModal()),
  }
}

export const SlideViews = connect(mapStateToProps, mapDispatchToProps)(SlideList)