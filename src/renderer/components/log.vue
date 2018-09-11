<template>
    <li class="log-item">
      <Icon size="14" type="ios-loading" color="#3399ff" v-show="state === 1" />
      <Icon size="14" type="ios-checkmark-circle-outline" color="#00cc66" v-show="state === 2" />
      <Icon size="14" type="ios-close-circle-outline" color="#ff5500" v-show="state === 3" />
      <span>{{content}}</span>
    </li>
</template>
<script>
export default {
  name: 'log',
  props: ['content', 'state']
}
</script>
<style scoped lang="scss">
.log-item{
  list-style: none;
  line-height: 18px;
}
</style>

