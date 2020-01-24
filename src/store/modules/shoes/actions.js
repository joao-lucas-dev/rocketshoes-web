export function addShoesRequest(url, name, price) {
  return {
    type: '@shoes/ADD_REQUEST',
    payload: {
      url,
      name,
      price,
    },
  };
}

export function addShoesSuccess(shoes) {
  return {
    type: '@shoes/ADD_SUCCESS',
    shoes,
  };
}
