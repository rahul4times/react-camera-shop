import axios from 'axios';

export const GET_CAMERAS_PENDING = 'GET_CAMERAS_PENDING';
export const GET_CAMERAS_SUCCESS = 'GET_CAMERAS_SUCCESS';


export const getCameras = () => {
  return async (dispatch) => {
    dispatch({ type: GET_CAMERAS_PENDING })
    let cameras = await axios.get('https://g66backserver.herokuapp.com/cameras')
    dispatch({
      type: GET_CAMERAS_SUCCESS,
      payload: cameras
    })
  }
}
