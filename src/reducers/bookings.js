import {
  GET_BOOKINGS_DATA_REQUEST,
  GET_BOOKINGS_DATA_SUCCESS,
  GET_BOOKINGS_DATA_FAILURE,
} from '../constants/actionTypes';

const initialState = {
  bookings: [],
  isFetchingBookings: false,
  errorMessage: '',
};

export default function(state=initialState, action) {
  switch (action.type) {
      case GET_BOOKINGS_DATA_REQUEST:
          return {
              ...state,
              errorMessage: '',
              isFetchingBookings: action.isFetchingBookings,
          };
      case GET_BOOKINGS_DATA_SUCCESS:
          return {
              ...state,
              bookings: action.bookings,
              isFetchingBookings: action.isFetchingBookings,
          };
      case GET_BOOKINGS_DATA_FAILURE:
          return {
              ...state,
              errorMessage: action.message,
              isFetchingBookings: action.isFetchingBookings,
          };
      default:
          return state;
  }
}