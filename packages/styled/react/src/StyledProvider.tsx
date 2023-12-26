import { get, onChange, set } from './core/colorMode';
import * as React from 'react';
import { Platform, View } from 'react-native';
import { propertyTokenMap } from './propertyTokenMap';
import type { COLORMODES } from './types';
import { platformSpecificSpaceUnits } from './utils';
import { createGlobalStylesWeb } from './createGlobalStylesWeb';
import { createGlobalStyles } from './createGlobalStyles';
import { order } from './utils/css-injector/utils/inject';

type Config = any;
let colorModeSet = false;

export const defaultConfig: {
  config: Config;
  colorMode: COLORMODES;
  components: any;
} = {
  config: {},
  colorMode: 'light',
  components: {},
};

const defaultContextData: Config = defaultConfig;
const StyledContext = React.createContext<Config>(defaultContextData);

const setCurrentColorMode = (inputColorMode: string) => {
  if (inputColorMode) {
    // console.log(get(), '>>>>>>');
    const currentColorMode = get();
    if (currentColorMode !== inputColorMode) {
      set(inputColorMode);
    }
    colorModeSet = true;
  }

  // if (inputColorMode) {
  //   set(inputColorMode === 'dark' ? 'dark' : 'light');
  //   colorModeSet = true;
  // }
};
export const StyledProvider: React.FC<{
  config: Config;
  colorMode?: COLORMODES;
  children?: React.ReactNode;
  globalStyles?: any;
  _experimentalNestedProvider?: boolean;
}> = ({
  config,
  colorMode,
  children,
  globalStyles,
  _experimentalNestedProvider,
}) => {
  const inlineStyleMap: any = React.useRef({
    initialStyleInjected: false,
    injectedCssTags: [],
  });
  inlineStyleMap.current.initialStyleInjected = false;

  const currentConfig: any = React.useMemo(() => {
    const configWithPlatformSpecificUnits: any = platformSpecificSpaceUnits(
      config,
      Platform.OS
    );

    return configWithPlatformSpecificUnits;
  }, [config]);

  if (Platform.OS === 'web' && globalStyles) {
    const globalStyleInjector = createGlobalStylesWeb(globalStyles);
    globalStyleInjector({ ...currentConfig, propertyTokenMap });
  }

  const currentColorMode = React.useMemo(() => {
    return colorMode ?? get() ?? 'light';
  }, [colorMode]);

  const _experimentalNestedProviderRef = React.useRef(null);
  React.useEffect(() => {
    let documentElement: any = null;

    if (Platform.OS === 'web') {
      if (_experimentalNestedProvider) {
        // write own code for nested colorMode
        documentElement = _experimentalNestedProviderRef.current;
      } else {
        documentElement = document.documentElement;
      }
    }
    // Add gs class name
    if (Platform.OS === 'web') {
      documentElement.classList.add(`gs`);
      documentElement.classList.add(`gs-${currentColorMode}`);
    }

    onChange((currentColor: string) => {
      // only for web
      if (Platform.OS === 'web' && !_experimentalNestedProvider) {
        const documentElement = document.documentElement;

        if (Platform.OS === 'web') {
          if (currentColor === 'dark') {
            documentElement.classList.remove(`gs-light`);
          } else {
            documentElement.classList.remove(`gs-dark`);
          }
          documentElement.classList.add(`gs-${currentColor}`);
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    setCurrentColorMode(currentColorMode);
  }, [currentColorMode]);

  React.useLayoutEffect(() => {
    if (Platform.OS === 'web') {
      const styleArray: any = [];

      if (inlineStyleMap.current.initialStyleInjected) {
        return;
      }

      if (typeof window !== 'undefined') {
        document
          .querySelector('#gs-injected')
          .append(...inlineStyleMap?.current?.injectedCssTags);
      }

      inlineStyleMap.current.initialStyleInjected = true;
    }
  });
  // // Set colormode for the first time
  if (!colorModeSet) {
    setCurrentColorMode(currentColorMode);
  }

  const [animationDriverData, setAnimationDriverData] = React.useState();
  const globalStyleMap =
    config?.globalStyle && createGlobalStyles(config.globalStyle, Platform);

  const contextValue = React.useMemo(() => {
    const styledData = {
      config: currentConfig,
      globalStyle: globalStyleMap,
      animationDriverData,
      setAnimationDriverData,
      inlineStyleMap: inlineStyleMap.current,
    };

    if (_experimentalNestedProvider) {
      //@ts-ignore
      styledData._experimentalNestedProvider = _experimentalNestedProvider;
      //@ts-ignore
      styledData.colorMode = colorMode;
    }
    return styledData;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentConfig, globalStyleMap, animationDriverData]);

  const providerComponent = (
    <StyledContext.Provider value={contextValue}>
      {children}
    </StyledContext.Provider>
  );

  if (_experimentalNestedProvider) {
    return (
      // @ts-ignore
      <View ref={_experimentalNestedProviderRef}>{providerComponent}</View>
    );
  } else {
    return <>{providerComponent}</>;
  }
};

export const useStyled = () => React.useContext(StyledContext);
