import { createStore } from 'redux';
import { slideReducer } from '../Reducers/Slide';

export const store = createStore(slideReducer)