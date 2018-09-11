import writeFile from '../writeFile'

export default function (opts) {
  const file = `
<template>
    <div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                
            }
        },
        mounted () {
        },
        beforeDestroy () {
        },
        methods: {
        }
    }
</script>
    `
  writeFile({
    directory: `${opts.directory}/src`,
    fileName: 'app.vue',
    data: file,
    codeType: 'html',
    success () {
      opts.log.app = 2
    },
    error () {
      opts.log.app = 3
    }
  })
}
