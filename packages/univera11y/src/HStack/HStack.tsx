import React, { forwardRef } from 'react';
import type { IHStackProps } from './types';
import { flattenChildren } from '../utils/getSpacedChild';

export const HStack = ({ StyledHStack, StyledHStackSpacer }: any) =>
  forwardRef(
    ({ children, reversed, space, ...props }: IHStackProps, ref: any) => {
      const getSpacedChildren = (children: any) => {
        let childrenArray = React.Children.toArray(flattenChildren(children));
        childrenArray = reversed ? [...childrenArray].reverse() : childrenArray;
        childrenArray = childrenArray.map((child: any, index: number) => {
          return (
            <React.Fragment key={child.key ?? `spaced-child-${index}`}>
              {child}
              {index < childrenArray.length - 1 && (
                <StyledHStackSpacer size={space} />
              )}
            </React.Fragment>
          );
        });

        return childrenArray;
      };
      return (
        <StyledHStack ref={ref} {...props}>
          {getSpacedChildren(children)}
        </StyledHStack>
      );
    }
  );
