import {
  GET_CAMERAS_PENDING,
  GET_CAMERAS_SUCCESS,
  ADD_TO_CART_PENDING,
  ADD_TO_CART_SUCCESS
} from '../actions/cameras';

export default(state = [], action) => {
  switch (action.type) {
    case GET_CAMERAS_PENDING:
      return state;
    case GET_CAMERAS_SUCCESS:
      return [...action.payload.data];
      case ADD_TO_CART_PENDING:
        return state;
      case ADD_TO_CART_SUCCESS:
        console.log('action: ', action.payload.data);
        console.log('state: ', state);
        return [...state];
    default:
      return state;
  }
}
