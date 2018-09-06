<template>
  <div id="app">
    <TopToolbar></TopToolbar>
    <FirstContent></FirstContent>
    <FirstFooter></FirstFooter>
  </div>
</template>

<script>
  import TopToolbar from '@/components/firstPage/topToolbar'
  import FirstFooter from '@/components/firstPage/firstFooter'
  import FirstContent from '@/components/firstPage/firstContent'
  export default {
    name: 'home',
    components: {
      TopToolbar,
      FirstFooter,
      FirstContent
    }
  }
</script>
