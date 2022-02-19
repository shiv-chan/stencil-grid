import { Config } from '@stencil/core';
import dotenvPlugin from 'rollup-plugin-dotenv';
import nodePolyfills from 'rollup-plugin-node-polyfills';

export const config: Config = {
  namespace: 'stencil-grid',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  rollupPlugins: {
    after: [
      // Plugins injected after commonjs()
      nodePolyfills(),
      dotenvPlugin(),
    ],
  },
};
