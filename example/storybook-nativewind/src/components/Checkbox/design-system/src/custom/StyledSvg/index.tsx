import { styled } from '@gluestack-style/react';
import { Svg } from 'react-native-svg';
export const StyledSvg = styled(
  Svg,
  {
    width: 24,
    height: 24,
    defaultProps: {
      stroke: '$gray700',
      viewBox: '0 0 24 24',
      fill: 'none',
      strokeWidth: 2,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
  },
  { resolveProps: ['stroke', 'color'] },
  {
    propertyTokenMap: {
      stroke: 'colors',
      color: 'colors',
    },
    propertyResolver: {},
  }
);
