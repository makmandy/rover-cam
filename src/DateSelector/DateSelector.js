import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';

import './DateSelector.css';

class DateSelector extends Component {
  render() {
    const {
      clearDate, 
      date,
      handleChangeDate,
      fetchPhotosByDate,
    } = this.props;

    const prettyDate = moment(date).format('MMMM DD, YYYY');

    return (
      <div>
      <h3>{prettyDate}</h3>
      <input
        type="date"
        className="dateSelector"
        value={date}
        onClick={clearDate}
        onChange={handleChangeDate}
      />
      <button onClick={fetchPhotosByDate}>search</button>
      </div>
    )
  }
}

DateSelector.propTypes = {
  date: PropTypes.string,
};

export default DateSelector;