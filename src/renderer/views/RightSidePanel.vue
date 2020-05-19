<template>
  <perfect-scrollbar
    :options="{suppressScrollX: true}"
    class="right-side-panel"
  >
    <div>Right</div>
  </perfect-scrollbar>
</template>

<script>
  export default {
    name: 'RightSidePanel'
  }
</script>

<style lang="scss">
.right-side-panel{
    height: calc(100vh - 30px);
}
</style>
