import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
class SlideList extends React.Component {
  render() {
    if (!this.props.isLoggedIn) {
      console.log('*****',this.props)
      return <Redirect to='/login' />
    }
    return (
      <div>
        SlideList
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  }
}

export const SlideViews = connect(mapStateToProps)(SlideList)