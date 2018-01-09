import {combineReducers} from 'redux';
import conversation from './conversationReducer';

const rootReducer = combineReducers({
  conversation
});

export default rootReducer;
