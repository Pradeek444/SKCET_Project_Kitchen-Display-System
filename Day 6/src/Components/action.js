
export const loginSuccess = (user) => {
    return {
      type: 'LOGIN_SUCCESS',
      payload: user,
    };
  };
  
  // Action creator for logout
  export const logout = () => {
    return {
      type: 'LOGOUT',
    };
  };
  
  // Add other action creators as needed
  