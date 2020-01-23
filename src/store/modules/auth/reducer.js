const INITIAL_STATE = {
  users: [],
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/USER_SUCCESS':
      return { users: [...state.users, action.user] };
    default:
      return state;
  }
}
