import * as types from '../types';

const INITIAL_STATE = {
  isOpen: false
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case types.TOGGLE_MENU:
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
}
