import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './DateSelector.css';

class DateSelector extends Component {
  render() {
    const {
      clearDate,
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
        onClick={clearDate}
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
  clearDate: PropTypes.func,
  date: PropTypes.string,
  fetchPhotosByDate: PropTypes.func,
  handleChangeDate: PropTypes.func,
};

export default DateSelector;