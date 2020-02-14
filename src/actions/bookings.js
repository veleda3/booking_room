import axios from 'axios';
import {
  GET_BOOKINGS_DATA_REQUEST,
  GET_BOOKINGS_DATA_SUCCESS,
  GET_BOOKINGS_DATA_FAILURE,
} from '../constants/actionsTypes';
import processError from '../helpers/processError';

const getBookingsDataRequest = () => ({
  type: GET_BOOKINGS_DATA_REQUEST,
  isFetchingBookings: true,
});

const getBookingsDataSuccess = bookings => ({
  type: GET_BOOKINGS_DATA_SUCCESS,
  isFetchingBookings: false,
  bookings,
});

const getBookingsDataFailure = message => ({
  type: GET_BOOKINGS_DATA_FAILURE,
  isFetchingBookings: false,
  message,
});

//makes the request to get the data
export const getAccountingData = () => async (dispatch, getState) => {
  dispatch(getBookingsDataRequest());
  let url = 'https://cove-coding-challenge-api.herokuapp.com/reservations';
  try {
    const { data, status } = await axios.get(url);
    if (status !== 200) {
      dispatch(getBookingsDataFailure(processError(data)));
      return
    }
    dispatch(getBookingsDataSuccess(data));
  } catch (e) {
    const error = processError(e);
    dispatch(getBookingsDataFailure(processError(error)));
  }
};

