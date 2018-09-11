import writeFile from '../writeFile'

const createESLintRc = function (opts) {
  let file = `
        {
            "root": true,
            "parserOptions": {
                "ecmaVersion": 6,
                "sourceType": "module"
            },
            "env": {
                "browser": true
            },
            "extends": "eslint:recommended",
            "plugins": [ "html" ],
            "rules": {
                "indent": ["error", 4, { "SwitchCase": 1 }],
                "quotes": ["error", "single"],
                "semi": ["error", "always"],
                "no-console": ["error"]
            }
        }
    `
  writeFile({
    directory: opts.directory,
    fileName: '.eslintrc.json',
    data: file,
    success () {
      opts.log.eslintRc = 2
    },
    error () {
      opts.log.eslintRc = 3
    }
  })
}

const createESLintIgnore = function (opts) {
  let file =
    `src/router.js
src/libs/util.js
src/vendors.js`
  writeFile({
    directory: opts.directory,
    fileName: '.eslintignore',
    data: file,
    codeType: 'none',
    success () {
      opts.log.eslintIgnore = 2
    },
    error () {
      opts.log.eslintIgnore = 3
    }
  })
}

export {
  createESLintRc,
  createESLintIgnore
}
