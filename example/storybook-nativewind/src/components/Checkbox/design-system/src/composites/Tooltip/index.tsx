//@ts-nocheck
import Root from './styled-components/Root';
import Content from './styled-components/Content';
import { createTooltip } from '@gluestack-ui/tooltip';

export const Tooltip = createTooltip({
  Root,
  // StyledTooltipArrow,
  Content,
});
