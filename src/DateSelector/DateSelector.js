import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './DateSelector.css';

class DateSelector extends Component {
  render() {
    const {
      date,
      fetchPhotosByDate,
      handleChangeDate,
    } = this.props;

    return (
      <div>
      <input
        type="date"
        className="dateSelector"
        value={date}
        onChange={handleChangeDate}
      />
      <button
        className="button"
        onClick={fetchPhotosByDate}>&rarr;</button>
      </div>
    )
  }
}

DateSelector.propTypes = {
  date: PropTypes.string,
  fetchPhotosByDate: PropTypes.func,
  handleChangeDate: PropTypes.func,
};

export default DateSelector;