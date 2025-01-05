import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import utcPlugin from 'dayjs/plugin/utc';

// // Extend dayjs with the UTC plugin
dayjs.extend(utcPlugin);

export function DayJs({
  element = 'time',
  date,
  format,
  toJSON = false,
  toISOString = false,
  asString = false,
  unixSeconds = false,
  unixMilliseconds = false,
  daysInMonth = false,
  displayIsValid = false,
  utc = false,
  add,
  subtract,
  children,
  ...props
}) {
  function addToDate(date, add) {
    return Object.keys(add).reduce(
      (updatedDate, key) => updatedDate.add(add[key], key),
      date
    );
  }

  function subtractFromDate(date, subtract) {
    return Object.keys(subtract).reduce(
      (updatedDate, key) => updatedDate.subtract(subtract[key], key),
      date
    );
  }

  const value = useMemo(() => {
    let value = dayjs(children || date || undefined);

    if (utc) {
      value = value.utc();
    } else {
      value = value.local();
    }

    if (add) {
      value = addToDate(value, add);
    }

    if (subtract) {
      value = subtractFromDate(value, subtract);
    }

    if (displayIsValid) {
      return `${value.isValid()}`;
    }

    if (daysInMonth) {
      return value.daysInMonth();
    }

    if (toJSON) {
      return value.toJSON();
    }

    if (toISOString) {
      return value.toISOString();
    }

    if (asString) {
      return value.toString();
    }

    if (unixMilliseconds) {
      return value.valueOf();
    }

    if (unixSeconds) {
      return value.unix();
    }

    if (format) {
      return value.format(format);
    }

    return value.format();
  }, [
    date,
    format,
    toJSON,
    toISOString,
    asString,
    unixSeconds,
    unixMilliseconds,
    utc,
    daysInMonth,
    displayIsValid,
    add,
    subtract,
    children
  ]);

  const Element = element;
  return <Element {...props}>{value}</Element>;
}

DayJs.propTypes = {
  element: PropTypes.any,
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.object
  ]),
  format: PropTypes.string,
  toJSON: PropTypes.bool,
  toISOString: PropTypes.bool,
  asString: PropTypes.bool,
  unixSeconds: PropTypes.bool,
  unixMilliseconds: PropTypes.bool,
  daysInMonth: PropTypes.bool,
  displayIsValid: PropTypes.bool,
  utc: PropTypes.bool,
  add: PropTypes.object,
  subtract: PropTypes.object,
  children: PropTypes.string
};

export default DayJs;
