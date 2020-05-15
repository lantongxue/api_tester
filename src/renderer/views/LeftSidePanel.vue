<template>
  <perfect-scrollbar 
    class="left-side-panel"
    :options="{suppressScrollX: true}"
  >
    <div class="row">
      <div class="col">
        <Select @change="change" placeholder="请选择项目" :items="[{label: '测试项目', value: '1'}]"></Select>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <hr>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h5 class="tab-title" :class="{active: currentTab == 'request-list'}" @click="tabChange('request-list', $event)">请求列表</h5>
      </div>
      <div class="col">
        <h5 class="tab-title" :class="{active: currentTab == 'history-list'}" @click="tabChange('history-list', $event)">历史记录</h5>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="tab-content" v-show="currentTab == 'request-list'">
          <ATRList :items="requestList"></ATRList>
        </div>
        <div class="tab-content" v-show="currentTab == 'history-list'">
         <ATRList :items="historyList"></ATRList>
        </div>
      </div>
    </div>
  </perfect-scrollbar>
</template>

<script>
import Select from '../components/Select'
import ATRList from '../components/ATR-List'
export default {
  components: {
    Select,
    ATRList
  },
  data () {
    return {
      currentTab: 'request-list',
      requestList: [],
      historyList: [
        {
          title: '这是一个GET请求',
          label: {
            type: 'primary',
            text: 'GET'
          },
          value: {a: '1', b: '2'},
          onclick: (value) => {
            console.log(value)
          }
        },
        {
          title: '这是一个POST请求',
          label: {
            type: 'success',
            text: 'POST'
          },
          onclick: (value) => {
            console.log(value)
          }
        },
        {
          title: '这是一个PUT请求',
          label: {
            type: 'secondary',
            text: 'PUT'
          },
          onclick: (value) => {
            console.log(value)
          }
        }
      ]
    }
  },
  methods: {
    showScrollBar ($event) {
      $event.target.style.overflowY = 'auto'
    },
    hideScrollBar ($event) {
      $event.target.style.overflowY = 'hidden'
    },
    change (v) {
      console.log(v)
    },
    tabChange (tab, $event) {
      this.currentTab = tab
      $event.target.classList.add('active')
    }
  }
}
</script>

<style lang="scss">
@import '../style/main.scss';
.left-side-panel{
  position: relative;
  height: calc(100vh - 30px);
  width: 20%;
  background-color: rgba(72, 75, 74, 0.89);
  overflow: hidden;
}
.row{
  margin: unset;
}
.col{
  padding: unset;
}
.tab-title{
  cursor: default;
  color: #ffffff;
  font-size: 14px;
  padding: 10px;
  text-align: center;
  &:hover{
    background-color: $hoverBgColor;
  }
  &.active{
    background-color: $hoverBgColor;
  }
}
</style>