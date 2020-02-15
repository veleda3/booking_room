import {
  GET_ROOMS_DATA_REQUEST,
  GET_ROOMS_DATA_SUCCESS,
  GET_ROOMS_DATA_FAILURE,
} from '../constants/actionTypes';

const initialState = {
  rooms: [],
  isFetchingRooms: false,
  errorMessage: '',
};

export default function(state=initialState, action) {
  switch (action.type) {
      case GET_ROOMS_DATA_REQUEST:
          return {
              ...state,
              errorMessage: '',
              isFetchingRooms: action.isFetchingRooms,
          };
      case GET_ROOMS_DATA_SUCCESS:
          return {
              ...state,
              rooms: action.rooms,
              isFetchingRooms: action.isFetchingRooms,
          };
      case GET_ROOMS_DATA_FAILURE:
          return {
              ...state,
              errorMessage: action.message,
              isFetchingRooms: action.isFetchingRooms,
          };
      default:
          return state;
  }
}