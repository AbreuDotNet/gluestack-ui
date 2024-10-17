import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  View,
  {
    'justifyContent': 'center',
    'alignItems': 'center',
    'borderColor': '$muted400',
    'bg': '$muted50',
    'borderWidth': 2,
    'borderRadius': 6,

    '_web': {
      ':focusVisible': {
        outlineWidth: '2px',
        outlineColor: '$primary400',
        outlineStyle: 'solid',
      },
    },

    ':checked': {
      borderColor: '$primary600',
      bg: '$primary600',
    },

    ':hover': {
      'borderColor': '$muted500',

      ':checked': {
        bg: '$primary700',
        borderColor: '$primary700',
      },
    },

    ':active': {
      bg: '$primary800',
      borderColor: '$primary800',
    },

    ':invalid': {
      borderColor: '$error600',
    },
  },
  {
    ancestorStyle: ['_indicator'],
  }
);
