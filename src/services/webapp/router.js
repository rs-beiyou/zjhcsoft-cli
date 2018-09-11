import writeFile from '../writeFile'

export default function (opts) {
  const file = `
        const routers = [
            {
                path: '/',
                meta: {
                    title: ''
                },
                component: (resolve) => require(['./views/index.vue'], resolve)
            }
        ]
        export default routers
    `
  writeFile({
    directory: `${opts.directory}/src`,
    fileName: 'router.js',
    data: file,
    success () {
      opts.log.router = 2
    },
    error () {
      opts.log.router = 3
    }
  })
}
