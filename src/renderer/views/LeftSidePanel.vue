<template>
  <div class="left-side-panel" ref="leftSidePanel">
    <div class="row" ref="projectSelectRow">
      <div class="col">
        <Select @change="change" placeholder="请选择项目" :items="projectList"></Select>
      </div>
    </div>
    <div class="row" ref="hrRow">
      <div class="col">
        <hr>
      </div>
    </div>
    <div class="row" ref="tabRow">
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
          <perfect-scrollbar
            :options="{suppressScrollX: true}"
            ref="tabContentScrollBar"
          >
            <ATRList :items="requestList"></ATRList>
          </perfect-scrollbar>
        </div>
        <div class="tab-content" v-show="currentTab == 'history-list'">
          <perfect-scrollbar
            :options="{suppressScrollX: true}"
            ref="tabContentScrollBar"
          >
            <ATRList :items="historyList"></ATRList>
          </perfect-scrollbar>
        </div>
      </div>
    </div>
  </div>
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
      projectList: [
        {label: '测试项目', value: '1'},
        {label: '测试项目', value: '1'},
        {label: '测试项目', value: '1'},
        {label: '测试项目', value: '1'}
      ],
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
        },
        {
          title: '这是一个DELETE请求',
          label: {
            type: 'danger',
            text: 'DELETE'
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
  },
  mounted () {
    let tabContentOffsetHeight = this.$refs.projectSelectRow.offsetHeight + this.$refs.hrRow.offsetHeight + this.$refs.tabRow.offsetHeight
    this.$refs.tabContentScrollBar.$el.style.height = this.$refs.leftSidePanel.offsetHeight - tabContentOffsetHeight + 'px'
    this.$electron.remote.getCurrentWindow().on('resize', (e) => {
      this.$refs.tabContentScrollBar.$el.style.height = this.$refs.leftSidePanel.offsetHeight - tabContentOffsetHeight + 'px'
    })
  }
}
</script>

<style lang="scss">
@import '../style/main.scss';
.left-side-panel{
  position: relative;
  height: calc(100vh - 30px);
  background-color: rgba(72, 75, 74, 0.89);
  overflow: hidden;
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
