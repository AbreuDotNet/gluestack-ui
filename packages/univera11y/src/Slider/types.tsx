import type { MutableRefObject } from 'react';

export interface InterfaceSliderProps {
  /** The current value of the Slider */
  value?: number;
  /** The default value (uncontrolled). */
  defaultValue?: number;
  /** Handler that is called when the value changes. */
  onChange?: (value: number) => void;
  children?: any;
  /**
   * Text description of slider. This will be announced by screen reader/
   */
  accessibilityLabel?: string;
  /**
   * If true, the value will be incremented or decremented in reverse.
   */
  isReversed?: boolean;
  /**
   * The orientation of the Slider.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  /** Whether the whole Slider is disabled. */
  isDisabled?: boolean;
  /** Fired when the slider stops moving, due to being let go. */
  onChangeEnd?: (value: number) => void;
  /**
   * The slider's minimum value.
   * @default 0
   */
  minValue?: number;
  /**
   * The slider's maximum value.
   * @default 100
   */
  maxValue?: number;
  /**
   * The slider's step value.
   * @default 1
   */
  step?: number;
  /** Whether the whole Slider is readonly. */
  isReadOnly?: boolean;
  /** Prop applied to change slider track height */
  sliderTrackHeight?: (string & {}) | number;
  /**Prop applied to change size of slider thumb */
  thumbSize?: (string & {}) | number;
}

export interface ISliderTrackProps {
  /** Whether the whole Slider is readonly. */
  isReadOnly?: boolean;
  children?: any;
}

export interface ISliderTrackFilledProps {
  /** Whether the whole Slider is readonly. */
  isReadOnly?: boolean;
}

export interface ISliderThumbProps {
  /**
   * The orientation of the Slider.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  /** Whether the Thumb is disabled. */
  isDisabled?: boolean;
  /** Whether the whole Slider is readonly. */
  isReadOnly?: boolean;
}

export type ISliderComponentType = ((
  props: ISliderProps & { ref?: MutableRefObject<any> }
) => JSX.Element) & {
  Thumb: React.MemoExoticComponent<
    (props: ISliderThumbProps & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
  Track: React.MemoExoticComponent<
    (props: ISliderTrackProps & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
  FilledTrack: React.MemoExoticComponent<
    (
      props: ISliderTrackFilledProps & { ref?: MutableRefObject<any> }
    ) => JSX.Element
  >;
};

export type ISliderProps = InterfaceSliderProps;
