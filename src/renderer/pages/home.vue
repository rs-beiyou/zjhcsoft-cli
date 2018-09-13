<template>
  <div>
    <div class="index-page">
      <img :src="web" alt="zjhcsoft-web">
    </div>
  </div>
</template>

<script>
  import web from '@/assets/zjhcsoft-web.jpeg'
  export default {
    name: 'index',
    data () {
      return {
        web: web
      }
    }
  }
</script>
<style scoped lang="scss">
.index-page{
  position: relative;
  width: 100%;
  text-align: center;
  img{
    display: inline-block;
    width: 650px;
  }
}
</style>
