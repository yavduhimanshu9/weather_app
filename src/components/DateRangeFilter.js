import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

const DateRangeFilter = ({ onChange }) => {
  const handleDateChange = (dates) => {
    if (dates) {
      const startDate = moment(dates[0]).unix();
      const endDate = moment(dates[1]).unix();
      onChange(startDate, endDate);
    }
  };

  return (
    <div className="mt-5">
      <RangePicker onChange={handleDateChange} />
    </div>
  );
};

export default DateRangeFilter;
