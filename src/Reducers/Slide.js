import {
  SET_PROFILE, SET_SLIDE_POSITION, SET_SLIDE_VIEW
} from '../Common/Constants/ActionType';
import {
  SLIDE_POSITION
} from '../Common/Constants/StringConstants';

const initialState = {
  isLoggedIn: false,
  slidePosition: SLIDE_POSITION.TOP,
  currentCount: null,
  viewedSlides: [],
}

export const slideReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return { ...state, isLoggedIn: true };

    case SET_SLIDE_POSITION:
      return { ...state, slidePosition: action.payload };

    case SET_SLIDE_VIEW:
      return { ...state, currentCount: action.slideCount, viewedSlides: [...state.viewedSlides, action.slideCount] };
      
    default:
      return state;
  }
}