import * as types from '../types';

export const handleChange = (e) => {
  let type = '';
  switch(e.target.name) {
    case 'paddingBottom':
      type = types.UPDATE_PADDING_BOTTOM;
      break;
    case 'paddingTop':
      type = types.UPDATE_PADDING_TOP;
      break;
  }

  return {
    type: type,
    payload: e.target.value
  }
};
