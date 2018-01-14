import { TEST_ACTION_CONSTANT, GET_CONVERSATIONS_SUCCESS } from '../constants';

export const testMessage = () => ({type: TEST_ACTION_CONSTANT});

export const getConversations = (conversations) => (
  {
    type: GET_CONVERSATIONS_SUCCESS,
    payload: conversations
  });

export const conversationsApiCall = () => {
  return (dispatch) => {
    fetch('http://localhost:4000/conversations', {
      method: 'GET',
   })
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else {
        const error = new Error(response.statusText);
        throw error;
      }
    })
    .then(responseJSON => {
      dispatch(getConversations(responseJSON))
    })
    .catch(error => { console.log('request failed', error); });
  }
};

