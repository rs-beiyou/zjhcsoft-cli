import fs from 'fs'
import jsbeautifier from 'js-beautify'

export default function (opts) {
  opts.codeFormat = opts.codeFormat || {}
  opts.codeType = opts.codeType || 'js'

  let data = ''
  if (opts.codeType === 'html') {
    data = jsbeautifier.html(opts.data, Object.assign({

    }, opts.codeFormat))
  } else if (opts.codeType === 'js') {
    data = jsbeautifier.js_beautify(opts.data, Object.assign({
      indent_size: 4
    }, opts.codeFormat))
  } else if (opts.codeType === 'css') {
    data = jsbeautifier.css(opts.data, Object.assign({
      indent_size: 4
    }, opts.codeFormat))
  } else if (opts.codeType === 'none') {
    data = opts.data
  }

  if (!fs.existsSync(opts.directory)) {
    fs.mkdirSync(opts.directory)
  }

  fs.writeFile(`${opts.directory}/${opts.fileName}`, data, (err) => {
    if (err) {
      opts.error && opts.error(err)
      return false
    }
    opts.success && opts.success()
  })
}
