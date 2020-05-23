<template>
  <div id="app">
    <title-bar>
      <ul class="title-bar-menu-list">
        <li class="title-bar-menu-item" @mouseenter="rootMenuHover" @mouseleave="rootMenuLeave">
          项目
          <div class="title-bar-menu-sub-items">
            <ul>
              <li class="title-bar-sub-menu-item" @click="createProject" data-toggle="modal" data-target="#create_project_dialog">新建项目</li>
              <li class="title-bar-menu-divider"></li>
              <li class="title-bar-sub-menu-item">当前项目设置</li>
            </ul>
          </div>
        </li>
        <li class="title-bar-menu-item" @mouseenter="rootMenuHover" @mouseleave="rootMenuLeave">
          请求
          <div class="title-bar-menu-sub-items">
            <ul>
              <li class="title-bar-sub-menu-item">新建请求</li>
            </ul>
          </div>
        </li>
        <li class="title-bar-menu-item" @mouseenter="rootMenuHover" @mouseleave="rootMenuLeave">
          选项
          <div class="title-bar-menu-sub-items">
            <ul>
              <li class="title-bar-sub-menu-item">通用设置</li>
            </ul>
          </div>
        </li>
        <li class="title-bar-menu-item" @mouseenter="rootMenuHover" @mouseleave="rootMenuLeave">
          帮助
          <div class="title-bar-menu-sub-items">
            <ul>
              <li class="title-bar-sub-menu-item" @click="projectHome">项目主页</li>
              <li class="title-bar-menu-divider"></li>
              <li class="title-bar-sub-menu-item" @click="license">查看许可证</li>
              <li class="title-bar-sub-menu-item" @click="projectHome">第三方声明</li>
              <li class="title-bar-menu-divider"></li>
              <li class="title-bar-sub-menu-item" @click="openDevTools">开发人员工具</li>
              <li class="title-bar-menu-divider"></li>
              <li class="title-bar-sub-menu-item">检查更新</li>
              <li class="title-bar-menu-divider"></li>
              <li class="title-bar-sub-menu-item">关于</li>
            </ul>
          </div>
        </li>
      </ul>
    </title-bar>
    <Split style="height: calc(100vh - 30px);">
      <SplitArea :size="25">
        <LeftSidePanel></LeftSidePanel>
      </SplitArea>
      <SplitArea :size="75">
        <RightSidePanel></RightSidePanel>
      </SplitArea>
    </Split>
    <div class="modal fade" id="create_project_dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              标题
            </h5>
            <button type="button" class="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleBar from './views/TitleBar'
import LeftSidePanel from './views/LeftSidePanel'
import RightSidePanel from './views/RightSidePanel'

export default {
  name: 'api_tester',
  data () {
    return {
      // createProjectShow: false
    }
  },
  components: {
    TitleBar,
    LeftSidePanel,
    RightSidePanel
  },
  methods: {
    rootMenuHover ($event) {
      let subMenu = $event.target.querySelector('.title-bar-menu-sub-items')
      if (subMenu !== null) {
        let leftOffset = $event.target.offsetLeft
        subMenu.style.left = leftOffset + 'px'
        subMenu.style.display = 'block'
      }
    },
    rootMenuLeave ($event) {
      let subMenu = $event.target.querySelector('.title-bar-menu-sub-items')
      if (subMenu !== null) {
        subMenu.style.display = 'none'
      }
    },
    _hideSubMenu (target) {
      if (target.parentNode.parentNode.className.indexOf('title-bar-menu-sub-items') !== -1) {
        target.parentNode.parentNode.style.display = 'none'
      }
    },
    openDevTools ($event) {
      this._hideSubMenu($event.target)
      this.$electron.remote.getCurrentWindow().webContents.openDevTools()
    },
    projectHome ($event) {
      this._hideSubMenu($event.target)
      this.$electron.remote.shell.openExternal('https://github.com/lantongxue/api_tester')
    },
    license ($event) {
      this._hideSubMenu($event.target)
      this.$electron.remote.shell.openExternal('https://github.com/lantongxue/api_tester/blob/master/LICENSE')
    },
    createProject ($event) {
      this._hideSubMenu($event.target)
    }
  }
}
</script>

<style lang="scss">
  .gutter{
    background-color: #00000014;
  }
</style>
