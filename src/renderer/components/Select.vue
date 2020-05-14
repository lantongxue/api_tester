<template>
  <div class="select">
    <input class="current" readonly @click="showItems" type="text" @blur="hideItems" placeholder="请选择项目">
    <ul>
      <li v-for="item in items" :key="item.value" :data-value="item.value" @click="itemSelected">{{item.label}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: false
    }
  },
  props: {
    items: {
      default: () => {
        return [
          {
            label: '没有哦',
            value: ''
          },
          {
            label: '有哦',
            value: '1'
          }
        ]
      }
    }
  },
  methods: {
    showItems ($event) {
      if (this.isShow) {
        this.hideItems($event)
      } else {
        $event.target.focus()
        $event.target.style.borderBottom = '1px solid #00000021'
        $event.target.parentNode.style.boxShadow = '0 0 5px 0px rgba(0, 0, 0, 0.5)'
        $event.target.parentNode.children[1].style.display = 'block'
        this.isShow = true
      }
    },
    hideItems ($event) {
      $event.target.style.borderBottom = ''
      $event.target.parentNode.style.boxShadow = ''
      $event.target.parentNode.lastChild.style.display = 'none'
      this.isShow = false
    },
    itemSelected ($event) {
      console.log($event)
    }
  }
}
</script>

<style lang="scss">
.select{
  background-color: #76777740;
  border-radius: 0;
  margin-bottom: 10px;
  .current{
    padding: 7px;
    color: white;
    cursor: default;
    border: none;
    outline: none;
    width: 100%;
    background-color: transparent;
    &:hover{
      background-color: rgba($color: #cccccc, $alpha: 0.3);
    }
    &::placeholder{
      color: white;
    }
  }
  ul{
    display: none;
    overflow-y: auto;
    li{
      list-style: none;
      cursor: pointer;
      padding: 7px;
      color: white;
      &:hover{
        background-color: #3178db87;
      }
    }
  }
}
</style>