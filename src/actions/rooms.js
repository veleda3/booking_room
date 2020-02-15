
import {
  GET_ROOMS_DATA_REQUEST,
  GET_ROOMS_DATA_SUCCESS,
  GET_ROOMS_DATA_FAILURE,
} from '../constants/actionTypes';
import processError from '../helpers/processError';
import rooms from '../constants/rooms'

const getRoomsDataRequest = () => ({
  type: GET_ROOMS_DATA_REQUEST,
  isFetchingRooms: true,
});

const getRoomsDataSuccess = rooms => ({
  type: GET_ROOMS_DATA_SUCCESS,
  isFetchingRooms: false,
  rooms,
});

const getRoomsDataFailure = message => ({
  type: GET_ROOMS_DATA_FAILURE,
  isFetchingRooms: false,
  message,
});

//we will pretend to do an api call to get the rooms from the backend
export const getRoomsData = () => async (dispatch) => {
  dispatch(getRoomsDataRequest());
    const response =  await rooms
    if (!response) {
      dispatch(getRoomsDataFailure(processError(response)));
      return
    }
    dispatch(getRoomsDataSuccess(response));
};