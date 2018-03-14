import * as types from '../types';

const INITIAL_STATE = {
  paddingBottom: 0,
  paddingTop: 1
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case types.UPDATE_PADDING_BOTTOM:
      return { ...state, paddingBottom: action.payload };
    case types.UPDATE_PADDING_TOP:
      return { ...state, paddingTop: action.payload };
    default:
      return state;
  }
}
