import React, { forwardRef } from 'react';
import { useSliderState } from '@react-stately/slider';
import { useLayout } from '../hooks';
import type { ISliderProps } from './types';
import { SliderContext } from './Context';
import { useSlider } from '@react-native-aria/slider';

const Slider = (StyledSlider: any) =>
  forwardRef(
    (
      {
        isDisabled,
        isReadOnly,
        orientation,
        isReversed,
        thumbSize = 16,
        sliderTrackHeight = 16,
        children,
        ...props
      }: ISliderProps,
      ref?: any
    ) => {
      const newProps = {
        ...props,
        'aria-label': props.accessibilityLabel ?? 'Slider',
      };

      if (typeof props.value === 'number') {
        //@ts-ignore - React Native Aria slider accepts array of values
        newProps.value = [props.value];
      }

      if (typeof props.defaultValue === 'number') {
        //@ts-ignore - React Native Aria slider accepts array of values
        newProps.defaultValue = [props.defaultValue];
      }

      props = newProps;

      const { onLayout, layout: trackLayout } = useLayout();
      const updatedProps: ISliderProps = Object.assign({}, props);

      if (isReadOnly || isDisabled) {
        updatedProps.isDisabled = true;
      }

      const state = useSliderState({
        ...updatedProps,
        //@ts-ignore
        numberFormatter: { format: (e) => e },
        minValue: props.minValue,
        maxValue: props.maxValue,
        onChange: (val: any) => {
          props.onChange && props.onChange(val[0]);
        },
        onChangeEnd: (val: any) => {
          props.onChangeEnd && props.onChangeEnd(val[0]);
        },
      });

      const { trackProps } = useSlider(
        props as unknown as any,
        state,
        trackLayout
      );

      const contextValue = React.useMemo(() => {
        return {
          trackLayout,
          state,
          orientation: orientation,
          isDisabled: isDisabled,
          isReversed: isReversed,
          trackProps,
          isReadOnly: isReadOnly,
          onTrackLayout: onLayout,
          // thumbSize: thumbSize,
          // sliderSize: sliderTrackHeight,
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [
        trackLayout,
        state,
        orientation,
        isDisabled,
        isReversed,
        isReadOnly,
        onLayout,
        thumbSize,
        sliderTrackHeight,
      ]);
      return (
        <SliderContext.Provider value={contextValue}>
          <StyledSlider ref={ref}>
            {React.Children.map(children, (child, index) => {
              if (child.displayName === 'SliderThumb') {
                return React.cloneElement(child as React.ReactElement, {
                  index,
                });
              }

              return child;
            })}
          </StyledSlider>
        </SliderContext.Provider>
      );
    }
  );

export default Slider;
