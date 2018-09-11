import writeFile from '../writeFile'

export default function (opts) {
  const file = `
        import Vue from 'vue'
        export default new Vue({
            data () {
                return {
                    
                }
            },
            computed: {
        
            },
            methods: {
                
            }
        })
    `
  writeFile({
    directory: `${opts.directory}/src`,
    fileName: 'bus.js',
    data: file,
    success () {
      opts.log.bus = 2
    },
    error () {
      opts.log.bus = 3
    }
  })
}
