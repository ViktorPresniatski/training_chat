import {TEST_ACTION_CONSTANT, GET_CONVERSATIONS_SUCCESS} from '../constants/actionTypes';
// import {fromJS} from 'immutable';

const initialState = {
  conversations: []
};

export default function conversation(state = initialState, action) {
  // const newState = fromJS(state); TODO  add then immutable js
  let newState = state;
  switch (action.type) {
    case TEST_ACTION_CONSTANT:
      console.log('TEST Action')
      return newState;
    case GET_CONVERSATIONS_SUCCESS:
      console.log(action.payload)
      return newState;
    default:
      return state;
  }
}
