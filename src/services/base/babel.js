import writeFile from '../writeFile'

const file = {
  'presets': [
    ['es2015', { 'modules': false }]
  ]
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
      opts.log.babel = 2
    },
    error () {
      opts.log.babel = 3
    }
  })
}
