import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';

import './DateSelector.css';

class DateSelector extends Component {
  state = {
    value: this.props.date,
  }

  handleChangeDate = (e) => {
    this.setState({
      value: e.target.value
    }, () => console.log(this.state.value));

  }

  render() {
    const { date } = this.props;
    const prettyDate = moment(date).format('MMMM DD, YYYY');
    return (
      <div>
      <h3>{prettyDate}</h3>
      <input type="text" placeholder="MM/DD/YYYY" className="dateSelector" value={this.state.value} onChange={this.handleChangeDate} />
      </div>
    )
  }
}

DateSelector.propTypes = {
  date: PropTypes.string,
};

export default DateSelector;