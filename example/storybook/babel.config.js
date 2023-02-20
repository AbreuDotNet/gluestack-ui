const path = require('path');

console.log('babel config :::::');
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      process.env.NODE_ENV !== 'production'
        ? [
            'module-resolver',
            {
              alias: {
                // For development, we want to alias the library to the source
                ['@universa11y/button']: path.join(
                  __dirname,
                  '../../packages/button/src'
                ),
                ['@universa11y/vstack']: path.join(
                  __dirname,
                  '../../packages/vstack/src'
                ),
                ['@universa11y/tooltip']: path.join(
                  __dirname,
                  '../../packages/tooltip/src'
                ),
                ['@universa11y/popover']: path.join(
                  __dirname,
                  '../../packages/popover/src'
                ),
                ['@universa11y/provider']: path.join(
                  __dirname,
                  '../../packages/provider/src'
                ),
                ['@universa11y/as-forwarder']: path.join(
                  __dirname,
                  '../../packages/as-forwarder/src'
                ),
                ['@universa11y/textarea']: path.join(
                  __dirname,
                  '../../packages/textarea/src'
                ),
                ['@universa11y/input']: path.join(
                  __dirname,
                  '../../packages/input/src'
                ),
                ['@universa11y/switch']: path.join(
                  __dirname,
                  '../../packages/switch/src'
                ),
                ['@universa11y/avatar']: path.join(
                  __dirname,
                  '../../packages/avatar/src'
                ),
                ['@universa11y/radio']: path.join(
                  __dirname,
                  '../../packages/radio/src'
                ),

                ['@universa11y/spinner']: path.join(
                  __dirname,
                  '../../packages/spinner/src'
                ),
                ['@universa11y/slider']: path.join(
                  __dirname,
                  '../../packages/slider/src'
                ),
                ['@universa11y/checkbox']: path.join(
                  __dirname,
                  '../../packages/checkbox/src'
                ),
                ['@universa11y/divider']: path.join(
                  __dirname,
                  '../../packages/divider/src'
                ),
                ['@universa11y/hstack']: path.join(
                  __dirname,
                  '../../packages/hstack/src'
                ),
                ['@universa11y/progress']: path.join(
                  __dirname,
                  '../../packages/progress/src'
                ),
                ['@universa11y/menu']: path.join(
                  __dirname,
                  '../../packages/menu/src'
                ),

                ['@universa11y/select']: path.join(
                  __dirname,
                  '../../packages/select/src'
                ),
                ['@universa11y/modal']: path.join(
                  __dirname,
                  '../../packages/modal/src'
                ),
                ['@universa11y/fab']: path.join(
                  __dirname,
                  '../../packages/fab/src'
                ),
                ['@universa11y/alert-dialog']: path.join(
                  '../../packages/alert-dialog/src'
                ),
                ['@universa11y/link']: path.join(
                  __dirname,
                  '../../packages/link/src'
                ),
                ['@universa11y/form-control']: path.join(
                  __dirname,
                  '../../packages/form-control/src'
                ),
                ['@universa11y/icon-button']: path.join(
                  __dirname,
                  '../../packages/icon-button/src'
                ),
                ['@universa11y/icon']: path.join(
                  __dirname,
                  '../../packages/icon/src'
                ),

                // ['@universa11y/button']: path.join(
                //   __dirname,
                //   '../../packages/button/src'
                // ),
                ['@universa11y/actionsheet']: path.join(
                  __dirname,
                  '../../packages/actionsheet/src'
                ),
                ['@universa11y/floating-ui']: path.join(
                  __dirname,
                  '../../packages/floating-ui/src'
                ),
                ['@universa11y/overlay']: path.join(
                  __dirname,
                  '../../packages/overlay/src'
                ),
                ['@universa11y/stack']: path.join(
                  __dirname,
                  '../../packages/stack/src'
                ),
                // ['@react-native-aria/overlays']: path.join(
                //   __dirname,
                //   '../../packages/overlays/src'
                // ),
                // ['@universa11y/transitions']: path.join(
                //   __dirname,
                //   '../../packages/transitions/src'
                // ),
                // ['@universa11y/react-native-aria']: path.join(
                //   __dirname,
                //   '../../packages/react-native-aria/src'
                // ),
              },
            },
          ]
        : ['babel-plugin-react-docgen-typescript', { exclude: 'node_modules' }],
    ],
  };
};
