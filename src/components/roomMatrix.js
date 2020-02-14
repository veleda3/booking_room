import React from 'react'
import PropTypes from 'prop-types';
import RoomRow from './RoomRow'

const RoomMatrix = ({ rooms }) => (
  <table className="table">
    <tr className="table__row table__row--header">
      <th scope="colgroup" colSpan="15" className="table__cell--header table__cell--level table__cell--align-left">
        Schedule a room for the day
      </th>
    </tr>
    <tr className="table__row table__row--subheader">
      <th scope="col" className="table__cell--header table__cell--align-left">
        Room
      </th>
      <th scope="col" className="table__cell--header">
        12am
      </th>
      <th scope="col" className="table__cell--header">
        1am
      </th>
      <th scope="col" className="table__cell--header">
        2am
      </th>
      <th scope="col" className="table__cell--header">
        3am
      </th>
      <th scope="col" className="table__cell--header">
        4am
      </th>
      <th scope="col" className="table__cell--header">
        5am
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
      <th scope="col" className="table__cell--header">
        10pm
      </th>
      <th scope="col" className="table__cell--header">
        11pm
      </th>
    </tr>
    <tbody className="table__body">
      {rooms.map(room => (
          <RoomRow
            key={room.id}
            room={room}
            bookings={room.bookings}
            date={props.date === null ? new Date() : props.date}
            onShowBooking={props.onShowBooking}
            onSetRoom={props.onSetRoom}
          />
        ))}
    </tbody>
  </table>
)

RoomMatrix.propTypes = {
  rooms: PropTypes.array,
}


export default RoomMatrix