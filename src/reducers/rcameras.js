import {
  GET_CAMERAS_PENDING,
  GET_CAMERAS_SUCCESS,
  ADD_TO_CART_PENDING,
  ADD_TO_CART_SUCCESS,
  DELETE_FROM_CART_PENDING,
  DELETE_FROM_CART_SUCCESS
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

        const inCart = state.filter(item => {
          return item.id !== action.payload.data[0].id;
        })

      return [...inCart, ...action.payload.data];

      case DELETE_FROM_CART_PENDING:
        return state;
        
      case DELETE_FROM_CART_SUCCESS:

        const outOfCart = state.filter(item => {
          return item.id !== action.payload.data[0].id;
        })

      return [...outOfCart, ...action.payload.data];


    default:
      return state;
  }
}
