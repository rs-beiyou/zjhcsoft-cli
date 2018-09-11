import writeFile from '../writeFile'

export default function (opts) {
  const file = `
        import Env from './env'
        let config = {
            env: Env
        }
        export default config
    `
  writeFile({
    directory: `${opts.directory}/src/config`,
    fileName: 'config.js',
    data: file,
    success () {
      opts.log.config = 2
    },
    error () {
      opts.log.config = 3
    }
  })
}
