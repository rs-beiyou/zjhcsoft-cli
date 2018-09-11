import writeFile from '../writeFile'

export default function (opts) {
  const file =
    `.idea
.idea/
.DS_Store
node_modules/
.project
dist
dist/*
src/config/*.tmp
src/config/env.js
npm-debug.log`
  writeFile({
    directory: opts.directory,
    fileName: '.gitignore',
    data: file,
    codeType: 'none',
    success () {
      opts.log.gitignore = 2
    },
    error () {
      opts.log.gitignore = 3
    }
  })
}
