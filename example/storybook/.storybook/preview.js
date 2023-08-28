import { addParameters } from '@storybook/client-api';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { Center, GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/themed';
import { useState } from 'react';
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    // inlineStories: false,
  },
  options: {
    storySort: {
      method: '',
      order: [
        'Overview',
        ['Introduction'],
        'Getting Started',
        ['Installation', 'VS Code Extension', 'Figma Plugin'],
        'Core Concepts',
        ['Themed Library', 'Unstyled Components', 'Accessibility'],
        'Performance',
        ['Overview', 'Benchmarks'],
        'Theme',
        [
          'Overview',
          'Default Theme',
          'Customizing Theme',
          'Customizing Fonts',
          'Customizing Components',
        ],
        'Styling',
        [
          'Overview',
          'Utility and SX Props',
          'State',
          'Color Mode',
          'Responsive',
          'Descendants',
          'Platform Specific',
          'Variants',
        ],
        'Components',
        [
          'Provider',
          ['GluestackUIProvider'],
          'Typography',
          ['Heading', 'Text'],
          'Layout',
          ['Box', 'Center', 'Divider', 'Stack', 'HStack', 'VStack'],
          'Feedback',
          ['Alert', 'Progress', 'Spinner', 'Toast'],
          'Data Display',
          ['Badge', 'Table'],
          'Forms',
          [
            'Button',
            'Checkbox',
            'FormControl',
            'Input',
            'Link',
            'Pressable',
            'Radio',
            'Select',
            'Slider',
            'Switch',
            'Tabs',
            'Textarea',
          ],
          'Overlay',
          ['AlertDialog', 'Menu', 'Modal', 'Popover', 'Tooltip'],
          'Disclosure',
          ['Actionsheet', 'Accordion', 'Tabs'],
          'Media And Icons',
          ['Avatar', 'Icon', 'Image'],
          'Others',
          ['Fab'],
        ],
        'React Native Components',
        ['ScrollView'],
        'Hooks',
        ['React Native ARIA'],
        'Production Optimizations',
        ['Babel Plugin'],
        'Guides',
        [
          'Install in Next.js',
          'Install in Expo',
          'Install in React Native',
          'Building Design Systems',
        ],
        'Configuration',
        ['Server-Side Rendering', 'React Server Components'],
        'Advanced',
        ['Fonts', 'Animations'],
        'Recipes',
        ['Card'],
        'Resources',
        ['Todo-List', 'Kitchen Sink'],
        'Migration',
        ['NativeBase to gluestack-ui'],
        'More',
        ['Roadmap', 'Changelog', 'Testing', 'Contribution Guidelines', 'FAQs'],
      ],
    },
  },
};

import { useDarkMode } from '../src/hooks/useDarkMode';
import { Platform } from 'react-native';

export const decorators = [
  (Story) => {
    let value = false;

    if (Platform.OS === 'web') {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      value = useDarkMode();
    }
    const [isDark] = useState(false);

    function getColorMode() {
      //@ts-ignore
      if (Platform.OS === 'web') {
        return value ? 'dark' : 'light';
      } else {
        return isDark ? 'dark' : 'light';
      }
    }
    return (
      <GluestackUIProvider config={config.theme} colorMode={getColorMode()}>
        <Center>
          <Story />
        </Center>
      </GluestackUIProvider>
    );
  },
];

addParameters({
  docs: {
    container: ({ children, context }) => {
      let value = false;

      if (Platform.OS === 'web') {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        value = useDarkMode();
      }
      const [isDark] = useState(false);

      function getColorMode() {
        //@ts-ignore
        if (Platform.OS === 'web') {
          return value ? 'dark' : 'light';
        } else {
          return isDark ? 'dark' : 'light';
        }
      }
      return (
        <DocsContainer context={context}>
          <GluestackUIProvider config={config.theme} colorMode={getColorMode()}>
            {children}
          </GluestackUIProvider>
        </DocsContainer>
      );
    },
  },
});
