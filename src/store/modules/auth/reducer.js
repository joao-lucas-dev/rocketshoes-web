const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  admin: null,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/USER_SUCCESS':
      return {
        name: action.user.name,
        email: action.user.email,
        password: action.user.password,
        admin: action.user.admin,
      };
    default:
      return state;
  }
}
