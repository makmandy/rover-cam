import React from 'react';
import PropTypes from 'prop-types';

import './DateSelector.css';

const DateSelector = ({
  date,
  fetchPhotosByDate,
  handleChangeDate,
}) => (
  <div className="dateSelectorContainer">
    <input
      type="date"
      className="dateSelector"
      value={date}
      onChange={handleChangeDate}
    />
    <button
      className="button"
      onClick={fetchPhotosByDate}
    >
      &rarr;
    </button>
  </div>
);

DateSelector.propTypes = {
  date: PropTypes.string,
  fetchPhotosByDate: PropTypes.func,
  handleChangeDate: PropTypes.func,
};

export default DateSelector;