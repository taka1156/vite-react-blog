import { StorybookConfig, CoreConfig, Options } from '@storybook/core-common';
import { UserConfig } from 'vite';
import { Weaken } from 'utilitypes';
import { resolve } from 'path';

interface CustomizedCoreConfig extends Weaken<CoreConfig, 'builder'> {
  builder: CoreConfig['builder'] | 'storybook-builder-vite';
}
interface CustomizedStorybookConfig extends Weaken<StorybookConfig, 'core'> {
  core: CustomizedCoreConfig;
  viteFinal?: (config: UserConfig, options: Options) => UserConfig;
}

const config: CustomizedStorybookConfig = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/components/**/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  core: {
    builder: 'storybook-builder-vite',
  },
  viteFinal: (config) => {
    config.resolve.alias = { '@': resolve(__dirname, './src') };
    if (process.env.NODE_ENV === 'production') {
      config.build.chunkSizeWarningLimit = 1200;
      config.base = '/vite-react-blog/';
    }
    config.plugins = [...config.plugins, require('@vitejs/plugin-react')];
    return config;
  },
};

export default config;
