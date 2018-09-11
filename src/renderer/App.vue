<template>
  <div id="app">
    <TopFixed></TopFixed>
    <FirstContent></FirstContent>
    <FirstFooter></FirstFooter>
  </div>
</template>

<script>
  import TopFixed from '@/components/firstPage/topFixed'
  import FirstFooter from '@/components/firstPage/firstFooter'
  import FirstContent from '@/components/firstPage/firstContent'
  export default {
    name: 'home',
    components: {
      TopFixed,
      FirstFooter,
      FirstContent
    }
  }
</script>
<style lang="scss" scoped>
#app{
  position: absolute;
  top: 0;
  left: 0;
  right:0;
  bottom: 0;
  overflow: hidden;
}
</style>

