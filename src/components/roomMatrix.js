import React from 'react'
import PropTypes from 'prop-types';
import moment from 'moment'
import RoomRow from './roomRow';

const bookingMatchRoom = (room, bookings, date) => bookings.filter(booked => booked.room.id === room.id && moment(booked.start).format('MM DD YYYY') === moment(date).format('MM DD YYYY'))

const RoomMatrix = ({ rooms, date, bookings, onSetRoom }) => {
  
  return (
  <table className="table">
    <tr className="table__row table__row--header">
      <th scope="colgroup" colSpan="18" className="table__cell--header table__cell--level table__cell--align-left">
        Schedule a room for the day
      </th>
    </tr>
    <tr className="table__row table__row--subheader">
      <th scope="col" className="table__cell--header table__cell--align-left">
        Room
      </th>
      <th scope="col" className="table__cell--header">
        6am
      </th>
      <th scope="col" className="table__cell--header">
        7am
      </th>
      <th scope="col" className="table__cell--header">
        8am
      </th>
      <th scope="col" className="table__cell--header">
        9am
      </th>
      <th scope="col" className="table__cell--header">
        10am
      </th>
      <th scope="col" className="table__cell--header">
        11am
      </th>
      <th scope="col" className="table__cell--header">
        12pm
      </th>
      <th scope="col" className="table__cell--header">
        1pm
      </th>
      <th scope="col" className="table__cell--header">
        2pm
      </th>
      <th scope="col" className="table__cell--header">
        3pm
      </th>
      <th scope="col" className="table__cell--header">
        4pm
      </th>
      <th scope="col" className="table__cell--header">
        5pm
      </th>
      <th scope="col" className="table__cell--header">
        6pm
      </th>
      <th scope="col" className="table__cell--header">
        7pm
      </th>
      <th scope="col" className="table__cell--header">
        8pm
      </th>
      <th scope="col" className="table__cell--header">
        9pm
      </th>
    </tr>
    <tbody className="table__body">
      {rooms && rooms.map(room => (
          <RoomRow
            key={room.id}
            room={room}
            bookings={bookingMatchRoom(room, bookings, date)}
            date={date ? date : new Date()}
          />
        ))}
    </tbody>
  </table>
)}

RoomMatrix.propTypes = {
  rooms: PropTypes.array,
  getRoomsData: PropTypes.func
}

export default RoomMatrix