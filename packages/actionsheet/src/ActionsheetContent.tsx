/* eslint-disable react-native/no-inline-styles */
import React, { forwardRef } from 'react';
import {
  Animated,
  Dimensions,
  findNodeHandle,
  AccessibilityInfo,
  Platform,
} from 'react-native';
import { ActionsheetContext } from './context';
import { ActionsheetContentProvider } from './ActionsheetContentContext';
import { OverlayAnimatePresence } from './OverlayAnimatePresence';
import { FocusScope } from '@react-native-aria/focus';
import { mergeRefs } from '@gluestack-ui/utils';
import { useDialog } from '@react-native-aria/dialog';
import type { IActionsheetContentProps } from './types';
import { usePreventScroll } from '@react-native-aria/overlays';

function ActionsheetContent<T>(
  StyledActionsheetContent: React.ComponentType<T>,
  AnimatePresence?: any
) {
  return forwardRef(
    (
      { children, focusable = true, ...props }: T & IActionsheetContentProps,
      ref?: any
    ) => {
      const {
        visible,
        handleClose,
        trapFocus,
        initialFocusRef,
        finalFocusRef,
      } = React.useContext(ActionsheetContext);

      usePreventScroll();

      const pan = React.useRef(new Animated.ValueXY()).current;
      const sheetHeight = React.useRef(0);

      const [contentSheetHeight, setContentSheetHeight] = React.useState(0);
      const [animatedViewSheetHeight, setAnimatedViewSheetHeight] =
        React.useState(0);

      const windowHeight = Dimensions.get('window').height;

      const animationDefaultConfig = {
        type: 'timing',
        duration: 300,
      };

      const handleCloseCallback = React.useCallback(handleClose, [
        ActionsheetContext,
        handleClose,
      ]);

      const contentSheetAnimatePosition = React.useMemo(
        () => animatedViewSheetHeight - contentSheetHeight,
        [animatedViewSheetHeight, contentSheetHeight]
      );

      const contentRef = React.useRef(null);

      React.useEffect(() => {
        if (contentRef) {
          const reactTag = findNodeHandle(contentRef.current);
          if (reactTag) {
            AccessibilityInfo.setAccessibilityFocus(reactTag);
            AccessibilityInfo.setAccessibilityFocus(reactTag);
            AccessibilityInfo.setAccessibilityFocus(reactTag);
            AccessibilityInfo.setAccessibilityFocus(reactTag);

            AccessibilityInfo.setAccessibilityFocus(reactTag);
            AccessibilityInfo.setAccessibilityFocus(reactTag);
            AccessibilityInfo.setAccessibilityFocus(reactTag);
            AccessibilityInfo.setAccessibilityFocus(reactTag);
          }
        }
      }, [visible, contentRef]);

      React.useEffect(() => {
        const finalRefVal = finalFocusRef ? finalFocusRef.current : null;
        if (visible) {
          if (initialFocusRef && initialFocusRef.current) {
            initialFocusRef.current.focus();
          }
        } else {
          if (finalRefVal) {
            finalRefVal.focus();
          }
        }
      }, [initialFocusRef, finalFocusRef, visible]);

      const { dialogProps } = useDialog({ ...props }, contentRef);

      const mergedRef = mergeRefs([ref, contentRef]);

      return (
        <Animated.View
          style={{
            transform: [{ translateY: pan.y }],
            width: '100%',
            height: '100%',
          }}
          onLayout={(event) => {
            const { height } = event.nativeEvent.layout;
            sheetHeight.current = height;
            setAnimatedViewSheetHeight(height);
          }}
          pointerEvents="box-none"
        >
          <FocusScope
            contain={trapFocus}
            autoFocus={visible && !initialFocusRef}
            restoreFocus={visible && !finalFocusRef}
          >
            <OverlayAnimatePresence
              visible={visible}
              AnimatePresence={AnimatePresence}
            >
              <StyledActionsheetContent
                initial={{
                  y: windowHeight,
                }}
                animate={{
                  y: contentSheetAnimatePosition,
                }}
                exit={{
                  y: windowHeight,
                }}
                transition={animationDefaultConfig}
                {...(props as T)}
                ref={mergedRef}
                focusable={Platform.OS === 'web' ? focusable : undefined}
                {...dialogProps}
                onLayout={(event: any) => {
                  const { height } = event.nativeEvent.layout;
                  setContentSheetHeight(height);
                }}
              >
                <ActionsheetContentProvider
                  sheetHeight={sheetHeight}
                  pan={pan}
                  handleClose={handleCloseCallback}
                >
                  {children}
                </ActionsheetContentProvider>
              </StyledActionsheetContent>
            </OverlayAnimatePresence>
          </FocusScope>
        </Animated.View>
      );
    }
  );
}

export default ActionsheetContent;
