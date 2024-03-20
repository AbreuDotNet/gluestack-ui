'use client';
import React from 'react';
import { extractDataClassName } from '../utils';
export { useStyleContext } from '../context';
export const withStates = (Component) =>
  React.forwardRef(({ states, className, ...props }, ref) => {
    const classNamesFinal = React.useMemo(() => {
      if (!className) return;
      extractDataClassName(className, states);
    }, [className, states]);
    return React.createElement(Component, {
      className: classNamesFinal,
      ...props,
      ref: ref,
    });
  });
