const sass = require('@stencil/sass');

exports.config = {
  namespace: 'neos',
  preamble: '(C) Neos Project https://neos.io - MIT License',
  globalScript: 'src/global/neos-global.ts',
  globalStyle: 'src/global/neos-global.scss',
  enableCache: true,
  plugins: [
    sass(),
  ],
  copy: [
    { src: 'assets' }
  ],
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: true,
      baseUrl: '/neos-ui-kit/'
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
