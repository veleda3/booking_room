import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RoomMatrix from './components/roomMatrix';
import { getRoomsData } from './actions/rooms';
import { getBookingsData } from './actions/bookings'


const Main = ({ actions: { getRoomsData, getBookingsData }, rooms, bookings }) => {
  useEffect(() => { 
    getRoomsData()
    getBookingsData() 
  }, []);

  return (
  <div>
    <RoomMatrix rooms={rooms} bookings={bookings} date={new Date()} />
  </div>
  )
}

const mapStateToProps = ({ rooms, bookings }) => ({
  rooms: rooms.rooms,
  bookings: bookings.bookings
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      getRoomsData,
      getBookingsData
    },
    dispatch
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);