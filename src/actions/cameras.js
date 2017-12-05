import axios from 'axios';

export const GET_CAMERAS_PENDING = 'GET_CAMERAS_PENDING';
export const GET_CAMERAS_SUCCESS = 'GET_CAMERAS_SUCCESS';

export const ADD_TO_CART_PENDING = 'ADD_TO_CART_PENDING';
export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';

export const DELETE_FROM_CART_PENDING = 'DELETE_FROM_CART_PENDING';
export const DELETE_FROM_CART_SUCCESS = 'DELETE_FROM_CART_SUCCESS';

// Getting all cameras
export const getCameras = () => {
  return async (dispatch) => {
    dispatch({ type: GET_CAMERAS_PENDING })
    let cameras = await axios.get('http://localhost:8000/cameras')
    dispatch({
      type: GET_CAMERAS_SUCCESS,
      payload: cameras
    })
  }
}

// Adding to cart
export const addToCart = (id) => {
  return async (dispatch) => {
    dispatch({ type: ADD_TO_CART_PENDING })
    let cameras = await axios.patch(`http://localhost:8000/cameras/cart/${id}/add`)
    dispatch({
      type: ADD_TO_CART_SUCCESS,
      payload: cameras
    })
  }
}

// Delete from cart
export const deleteFromCart = (id) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_FROM_CART_PENDING })
    let cameras = await axios.patch(`http://localhost:8000/cameras/cart/${id}/add`)
    dispatch({
      type: DELETE_FROM_CART_SUCCESS,
      payload: cameras
    })
  }
}
