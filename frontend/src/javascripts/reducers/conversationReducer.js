import {TEST_ACTION_CONSTANT} from '../constants/actionTypes';
// import {fromJS} from 'immutable';

const initialState = {
};

export default function conversation(state = initialState, action) {
  // const newState = fromJS(state); TODO  add then immutable js
  let newState = state;
  switch (action.type) {
    case TEST_ACTION_CONSTANT:
      console.log('TEST Action')
      return newState;
    default:
      return state;
  }
}
