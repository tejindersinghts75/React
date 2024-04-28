import React from 'react';
import { useRange } from 'react-range';

const RangeSlider = ({ min, max }) => {
  const STEP = 1;
  const [values, setValues] = React.useState([min, max]);

  const { Range, getTrackProps, getThumbProps } = useRange({
    min: min,
    max: max,
    step: STEP,
    values: values,
    onChange: (newValues) => {
      setValues(newValues);
    },
  });

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100px',
      }}
    >
      <div
        style={{
          height: '36px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-10px',
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <input
            type="number"
            value={values[0]}
            onChange={(e) => setValues([parseInt(e.target.value), values[1]])}
            style={{ width: '50px' }}
          />
          <input
            type="number"
            value={values[1]}
            onChange={(e) => setValues([values[0], parseInt(e.target.value)])}
            style={{ width: '50px' }}
          />
        </div>
        <div
          style={{
            height: '5px',
            width: '100%',
            borderRadius: '4px',
            background: '#ccc',
          }}
          {...getTrackProps()}
        >
          {values.map((value, index) => (
            <div
              key={index}
              {...getThumbProps({
                index,
                style: {
                  ...styles.thumb,
                  left: `${(value / max) * 100}%`,
                },
              })}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  thumb: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: '#0074d9',
    cursor: 'pointer',
    boxShadow: '0px 2px 6px #AAA',
    outline: 'none',
    position: 'absolute',
    top: '-8px',
  },
};

export default RangeSlider;
