/* eslint-disable no-return-assign */

import React, { useRef, useImperativeHandle, forwardRef } from 'react';

const StripeInput = forwardRef(({ component: Component, inputRef, ...props }: any, ref) => {
  const elementRef = useRef<any>();

  /* Todo - obtain these values from theme.props */
  const color = 'white';
  const placeholderColor = 'rgb(137, 147, 164)';
  const inputStyle = {
    color,
    '::placeholder': {
      color: placeholderColor,
    },
  };

  useImperativeHandle(ref, () => ({
    focus: () => {
      if (elementRef.current) {
        elementRef.current.focus();
      }
    },
  }));

  return (
    <Component
      onReady={(element: any) => (elementRef.current = element)}
      options={{
        style: {
          base: inputStyle,
        },
      }}
      {...props}
    />
  );
});

export default StripeInput;
