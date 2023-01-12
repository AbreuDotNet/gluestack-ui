import IconButtonMain from './IconButon';
import IconButtonText from './IconButonText';
import IconButtonSpinner from './IconButtonSpinner';
// import type { IIconButtonComponentType } from './types';

export const createIconButton = ({
  StyledIconButton,
  StyledIconButtonText,
  StyledIconButtonSpinner,
}: any) => {
  const IconButton = IconButtonMain(StyledIconButton) as any;
  IconButton.Text = IconButtonText(StyledIconButtonText);
  IconButton.Spinner = IconButtonSpinner(StyledIconButtonSpinner);

  IconButton.displayName = 'IconButton';
  IconButton.Text.displayName = 'IconButton.Text';
  IconButton.Spinner.displayName = 'IconButton.Spinner';

  return IconButton;
};
