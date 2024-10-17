import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  View,
  {
    alignItems: 'center',
    p: '$2',
    rounded: '$none',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    bg: '$white',

    _web: {
      userSelect: 'none',
    },
  },
  {}
);
