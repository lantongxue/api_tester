<template>
  <ul class="atr-list">
    <ATRListItem v-for="(item, index) in items" :key="index" :onclick="item.onclick(item.value)" :title="item.title" :label="item.label"></ATRListItem>
  </ul>
</template>

<script>
import ATRListItem from './ATR-List-Item'
export default {
  components: {
    ATRListItem
  },
  props: {
    items: {
      type: Array
    }
  }
}
</script>

<style lang="scss">
@import '../style/main.scss';
.atr-list{
  li{
    cursor: default;
    list-style: none;
    color: #ffffff;
    padding: 7px;
    &:hover{
      background-color: $hoverBgColor;
    }
  }
  .badge{
    line-height: 0;
    padding: 10px;
    border-radius: unset;
    float: right;
  }
}
</style>