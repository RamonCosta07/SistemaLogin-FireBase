import replace from '@rollup/plugin-replace';
import path from 'path';

export default {
  plugins: [
    replace({
      'process.env.REACT_APP_LOGIN_API': JSON.stringify(process.env.REACT_APP_LOGIN_API),
      preventAssignment: true
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  optimizeDeps: {
    exclude: [
      'path'
    ]
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: `import { h, Fragment } from 'preact';`
  },
};
