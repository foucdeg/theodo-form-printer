export const types = {
  GOOGLE_CLIENT_INIT: {
    REQUEST: 'GOOGLE_CLIENT_INIT_REQUEST',
    SUCCESS: 'GOOGLE_CLIENT_INIT_SUCCESS',
    FAILURE: 'GOOGLE_CLIENT_INIT_FAILURE',
  },
  LOGIN: {
    REQUEST: 'LOGIN_REQUEST',
    SUCCESS: 'LOGIN_SUCCESS',
    FAILURE: 'LOGIN_FAILURE',
  }
};

export const googleClientInitRequest = () => ({
  type: types.GOOGLE_CLIENT_INIT.REQUEST,
});

export const googleClientInitSuccess = () => ({
  type: types.GOOGLE_CLIENT_INIT.SUCCESS,
});

export const googleClientInitFailure = () => ({
  type: types.GOOGLE_CLIENT_INIT.FAILURE,
});

export const loginRequest = () => ({
  type: types.LOGIN.REQUEST,
});

export const loginSuccess = () => ({
  type: types.LOGIN.SUCCESS,
});

export const loginFailure = () => ({
  type: types.LOGIN.FAILURE,
});
