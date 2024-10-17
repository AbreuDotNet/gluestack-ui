import { styled } from '@gluestack-style/react';
import { Switch } from 'react-native';

export default styled(
  Switch,
  {
    'onthumbColor': '$muted50',
    'offThumbColor': '$muted50',
    'offTrackColor': '$muted300',
    'onTrackColor': '$primary600',

    'variants': {
      size: {
        sm: {
          transform: [
            {
              scale: 0.75,
            },
          ],
        },

        md: {},

        lg: {
          transform: [
            {
              scale: 1.25,
            },
          ],

          margin: 1,
        },
      },
    },

    'defaultProps': {
      size: 'md',
    },
    ':disabled': {
      opacity: 0.4,
    },
    ':invalid': {
      borderColor: '$error600',
      borderWidth: 2,
      borderRadius: 12,
    },
    ':hover': {
      //@ts-ignore
      offTrackColor: '$muted400',
      onTrackColor: '$primary700',
    },
  },
  {}
);
