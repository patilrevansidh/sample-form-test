import {
  SET_PROFILE, SET_SLIDE_POSITION, SET_SLIDE_COUNT, TOGGLE_MODAL
} from '../Common/Constants/ActionType';

export function setProfileStatus() {
  return { type: SET_PROFILE };
}

export function setSlidePosition(slidePosition) {
  return { type: SET_SLIDE_POSITION, slidePosition };
}


export function setSlideCount(slideCount) {
  return { type: SET_SLIDE_COUNT, slideCount };
}

export function toggleModal() {
  return { type: TOGGLE_MODAL };
}