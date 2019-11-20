import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';

class DateSelector extends Component {
  state = {
  }

  handleChangeDate = (date) => {

  }

  render() {
    const { date } = this.props;
    const prettyDate = moment(date).format('MMMM DD, YYYY');
    return (
      <div className="dateSelector">
      <h3>{prettyDate}</h3>
      </div>
    )
  }
}

DateSelector.propTypes = {
  date: PropTypes.string,
};

export default DateSelector;