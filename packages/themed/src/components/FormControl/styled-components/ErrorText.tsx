import { styled } from '../../styled';
import { Text } from '../../Text';

export default styled(
  Text,
  {
    fontSize: '$xs',
    fontFamily: '$body',
    color: '$error700',
    ml: '$1',
    _dark: {
      color: '$error400',
    },
  },
  {
    componentName: 'FormControlErrorText',
    ancestorStyle: ['_errorText'],
  } as const
);
