<template>
  <div>
    <h1 id="test">{{app_name}}</h1>
  </div>
</template>

<script>
import appDetail from '../package.json';
  export default {
    name: 'App',
    data() {
      return {
        message: 'Hello Vue!',
        app_name: appDetail.name
      }
    }
  }
</script>

<style lang="scss" scoped>
#test {
  color: $test-color;
}
</style>