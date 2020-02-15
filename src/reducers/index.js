import { combineReducers } from 'redux';
import bookings from './bookings'
import rooms from './rooms'

const rootReducer = combineReducers({
  bookings,
  rooms
});

export default rootReducer;