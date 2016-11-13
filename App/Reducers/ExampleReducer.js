import { DO_SOMETHING } from '../Actions';

const initialState = {
  payload: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case DO_SOMETHING:
      return {
        ...state,
        payload: 'hello world'
      };
    default:
      return state;
  }
}
