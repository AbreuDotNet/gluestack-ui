import { addParameters } from '@storybook/client-api';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { OverlayProvider } from '@gluestack-ui/overlay';
import { ToastProvider } from '@gluestack-ui/toast';
import { ThemeProvider } from '../src/nativewind-components/core/ThemeProvider';
import gstheme from './gstheme';
import { themes } from '@storybook/theming';
import '../global.css';
import { View } from 'react-native';
import { useColorScheme } from 'nativewind';
import { useDarkMode } from '../src/hooks/useDarkMode';
import { Platform } from 'react-native';
import { useEffect, useState } from 'react';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: '',
      order: [
        'Overview',
        ['Introduction'],
        'Core Concepts',
        ['Accessibility', 'Universal'],
        'components',
        ['PRIMITIVES', 'COMPOSITES'],
      ],
    },
  },
};

export const decorators = [
  (Story) => {
    let value = false;

    if (Platform.OS === 'web') {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      value = useDarkMode();
    }
    const [colorMode, setColorMode] = useState(false);

    function getColorMode() {
      //@ts-ignore
      if (Platform.OS === 'web') {
        return value ? 'dark' : 'light';
      } else {
        return isDark ? 'dark' : 'light';
      }
    }
    const { setColorScheme } = useColorScheme();
    useEffect(() => {
      setColorScheme(getColorMode());
      setColorMode(getColorMode());
    }, [getColorMode()]);

    return (
      <ThemeProvider mode={colorMode}>
        <OverlayProvider style={{ flex: 1 }}>
          <ToastProvider>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Story />
            </View>
          </ToastProvider>
        </OverlayProvider>
      </ThemeProvider>
    );
  },
];

addParameters({
  docs: {
    theme: gstheme,
    inlineStories: false,
    container: ({ children, context }) => {
      return <DocsContainer context={context}>{children}</DocsContainer>;
    },
  },
  darkMode: {
    current: 'light',
    light: {
      ...themes.light,
      brandTitle: 'Gluestack Design System',
      brandUrl: '/',
      brandImage: '/images/logo-light.png',
    },
    dark: {
      ...themes.dark,
      brandTitle: 'Gluestack Design System',
      brandUrl: '/',
      brandImage: '/images/logo-dark.png',
    },
  },
});
