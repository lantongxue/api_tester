<template>
  <div class="left-side-panel">
    <div class="row">
      <div class="col">
        <Select></Select>
        <Select></Select>
        <Select></Select>
      </div>
    </div>
  </div>
</template>

<script>
import Select from '../components/Select'
export default {
  components: {
    Select
  }
}
</script>

<style lang="scss">
.left-side-panel{
  height: calc(100vh - 30px);
  width: 20%;
  padding: 10px;
  background-color: rgba(72, 75, 74, 0.89);
  overflow-y: auto;
  overflow-x: hidden;
}
</style>