<template>
  <div class="atr-select">
    <input ref="_input" :value="label" :data-value="value" readonly @click="showItems" type="text" @blur="hideItems" :placeholder="placeholder">
    <perfect-scrollbar
      :options="{suppressScrollX: true}"
      class="atr-list-panel"
      ref="items"
    >
      <ul>
        <li v-for="(item, index) in items" :key="index" :data-value="item.value" @mousedown="itemSelected">{{item.label}}</li>
      </ul>
    </perfect-scrollbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: false,
      value: '',
      label: ''
    }
  },
  props: {
    placeholder: {
      type: String,
      default: '请选择项'
    },
    items: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    showItems ($event) {
      if (this.isShow) {
        this.hideItems($event)
      } else {
        $event.target.focus()
        $event.target.parentNode.style.boxShadow = '0 -1px 5px 0px rgba(0, 0, 0, 0.5)'
        this.$refs.items.$el.style.top = $event.target.parentNode.offsetHeight + 'px'
        this.$refs.items.$el.style.display = 'block'
        this.isShow = true
      }
    },
    hideItems ($event) {
      this.$refs.items.$el.parentNode.style.boxShadow = ''
      this.$refs.items.$el.style.top = '0'
      this.$refs.items.$el.style.display = 'none'
      this.isShow = false
    },
    /**
     * 解决input的blur和li的click冲突
     * 将li的点击事件绑定在li的mousedown上，因为mousedown会先比blur触发
     */
    itemSelected ($event) {
      $event.preventDefault()
      this.hideItems()
      this.value = $event.target.dataset['value']
      this.label = $event.target.innerText
      this.$emit('change', this.value)
    }
  }
}
</script>

<style lang="scss">
@import '../style/main.scss';
$bgColor: #767777;
.atr-select{
  position: relative;
  background-color: $bgColor;
  border-radius: 0;
  margin-bottom: 10px;
  input{
    padding: 7px;
    color: white;
    cursor: default;
    border: none;
    outline: none;
    width: 100%;
    background-color: transparent;
    &:hover{
      background-color: $hoverBgColor;
    }
    &::placeholder{
      color: white;
    }
  }
  .atr-list-panel{
    display: none;
    background-color: $bgColor;
    position: absolute;
    min-width: 100%;
    overflow: hidden;
    box-shadow: 0 2px 5px 0px rgba(0, 0, 0, 0.5);
    max-height: 300px;
    z-index: 999;
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