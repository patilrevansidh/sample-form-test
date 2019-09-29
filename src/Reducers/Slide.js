import {
  SET_PROFILE, SET_SLIDE_POSITION, SET_SLIDE_COUNT, TOGGLE_MODAL
} from '../Common/Constants/ActionType';
import {
  SLIDE_POSITION
} from '../Common/Constants/StringConstants';

const initialState = {
  isLoggedIn: false,
  slidePosition: SLIDE_POSITION.TOP,
  currentCount: null,
  viewedSlides: [],
  showSummary: false
}

export const slideReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return { ...state, isLoggedIn: true };

    case SET_SLIDE_POSITION:
      return { ...state, slidePosition: action.slidePosition };

    case SET_SLIDE_COUNT:
      return { ...state, currentCount: action.slideCount, viewedSlides: [...state.viewedSlides, action.slideCount] };

    case TOGGLE_MODAL:
      const stateValue = state.showSummary && { ...initialState, isLoggedIn: true} || { showSummary: !state.showSummary }
      return { ...state, ...stateValue };

    default:
      return state;
  }
}