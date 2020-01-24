export default function shoes(state = [], action) {
  switch (action.type) {
    case '@shoes/ADD_SUCCESS':
      return [...state, action.shoes];
    default:
      return state;
  }
}
