import writeFile from '../writeFile'

let file = {
  'name': '',
  'version': '1.0.0',
  'description': '',
  'main': 'index.js',
  'scripts': {
    'init': 'webpack --progress --config webpack.dev.config.js',
    'dev': 'webpack-dev-server --content-base ./ --open --inline --hot --compress --history-api-fallback --config webpack.dev.config.js',
    'build': 'webpack --progress --hide-modules --config webpack.prod.config.js',
    'lint': 'eslint --fix --ext .js,.vue src'
  },
  'repository': {
    'type': 'git',
    'url': ''
  },
  'author': '',
  'license': 'MIT',
  'dependencies': {
    'axios': '^0.17.1',
    'iview': '^2.7.4',
    'vue': '^2.5.2',
    'vue-router': '^3.0.1'
  },
  'devDependencies': {
    'autoprefixer-loader': '^3.2.0',
    'babel': '^6.23.0',
    'babel-core': '^6.23.1',
    'babel-loader': '^7.1.2',
    'babel-plugin-transform-runtime': '^6.12.0',
    'babel-preset-es2015': '^6.9.0',
    'babel-runtime': '^6.11.6',
    'css-loader': '^0.28.7',
    'eslint': '^4.13.1',
    'eslint-plugin-html': '^4.0.1',
    'extract-text-webpack-plugin': '^3.0.2',
    'file-loader': '^1.1.5',
    'html-loader': '^0.5.1',
    'html-webpack-plugin': '^2.28.0',
    'iview-loader': '^1.0.0',
    'less': '^2.7.3',
    'less-loader': '^4.0.5',
    'style-loader': '^0.19.1',
    'url-loader': '^0.6.2',
    'vue-hot-reload-api': '^2.2.4',
    'vue-html-loader': '^1.2.3',
    'vue-loader': '^13.5.0',
    'vue-style-loader': '^3.0.3',
    'vue-template-compiler': '^2.2.1',
    'webpack': '^3.8.1',
    'webpack-dev-server': '^2.9.2',
    'webpack-merge': '^4.1.1'
  }
}

export default function (opts) {
  // const data = opts.data
  writeFile({
    directory: opts.directory,
    fileName: 'package.json',
    data: JSON.stringify(file),
    codeFormat: {
      indent_size: 2
    },
    success () {
      opts.log.package = 2
    },
    error () {
      opts.log.package = 3
    }
  })
}
