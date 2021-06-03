const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_FAIL':
      console.log('login-failed');
      return {
        ...state,
        authError: 'login-failed',
      };
    case 'LOGIN_SUCCESS':
      console.log('login-success');
      return {
        ...state,
        authError: null,
      };
    case 'SIGN_OUT':
      console.log('logged out successfuly');
      return state;
    default:
      return state;
  }
};
export default authReducer;
