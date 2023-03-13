import * as types from '../types';

const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
};

export default function (action, state = initialState) {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      // console.log('REDUCER', action.payload);
      return state;
    }
    default: {
      return state;
    }
  }
}
