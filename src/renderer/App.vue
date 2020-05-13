<template>
  <div id="app">
    <div class="menu-bar">
      <ul class="menu-list">
        <li class="menu-item" @mouseenter="rootMenuHover" @mouseleave="rootMenuLeave">
          文件
          <div class="menu-sub-items">
            <ul>
              <li class="sub-menu-item">新建文件</li>
              <li class="sub-menu-item">新建窗口</li>
              <li class="menu-divider"></li>
              <li class="sub-menu-item">打开文件</li>
              <li class="sub-menu-item">打开文件夹</li>
              <li class="menu-divider"></li>
              <li class="sub-menu-item">退出</li>
            </ul>
          </div>
        </li>
        <li class="menu-item" @mouseenter="rootMenuHover" @mouseleave="rootMenuLeave">
          编辑
          <div class="menu-sub-items">
            <ul>
              <li class="sub-menu-item">2编辑文件</li>
              <li class="sub-menu-item">3编辑窗口</li>
              <li class="menu-divider"></li>
              <li class="sub-menu-item">退出</li>
            </ul>
          </div>
        </li>
        <li class="menu-item" @mouseenter="rootMenuHover" @mouseleave="rootMenuLeave">
          选择
          <div class="menu-sub-items">
            <ul>
              <li class="sub-menu-item">4选择文件</li>
              <li class="sub-menu-item">5选择窗口</li>
              <li class="menu-divider"></li>
              <li class="sub-menu-item">退出</li>
            </ul>
          </div>
        </li>
        <li class="menu-item" @mouseenter="rootMenuHover" @mouseleave="rootMenuLeave">
          查看
          <div class="menu-sub-items">
            <ul>
              <li class="sub-menu-item">5查看文件</li>
              <li class="sub-menu-item">6查看窗口</li>
              <li class="menu-divider"></li>
              <li class="sub-menu-item">退出</li>
            </ul>
          </div>
        </li>
        <li class="menu-item" @mouseenter="rootMenuHover" @mouseleave="rootMenuLeave">
          运行
          <div class="menu-sub-items">
            <ul>
              <li class="sub-menu-item">7运行文件</li>
              <li class="sub-menu-item">8运行窗口</li>
              <li class="menu-divider"></li>
              <li class="sub-menu-item">退出</li>
            </ul>
          </div>
        </li>
        <li class="menu-item" @mouseenter="rootMenuHover" @mouseleave="rootMenuLeave">
          终端
          <div class="menu-sub-items">
            <ul>
              <li class="sub-menu-item">9终端文件</li>
              <li class="sub-menu-item">10终端窗口</li>
              <li class="menu-divider"></li>
              <li class="sub-menu-item">退出</li>
            </ul>
          </div>
        </li>
        <li class="menu-item" @mouseenter="rootMenuHover" @mouseleave="rootMenuLeave">
          帮助
          <div class="menu-sub-items">
            <ul>
              <li class="sub-menu-item">11帮助文件</li>
              <li class="sub-menu-item">12帮助窗口</li>
              <li class="menu-divider"></li>
              <li class="sub-menu-item">退出</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'api_tester',
    methods: {
      rootMenuHover ($event) {
        let subMenu = $event.target.querySelector('.menu-sub-items')
        if (subMenu !== null) {
          let index = [...document.querySelectorAll('.menu-list>.menu-item')].indexOf($event.target)
          subMenu.style.left = (($event.target.offsetWidth * index) + 8) + 'px'
          subMenu.style.display = 'block'
        }
      },
      rootMenuLeave ($event) {
        let subMenu = $event.target.querySelector('.menu-sub-items')
        if (subMenu !== null) {
          subMenu.style.display = 'none'
        }
      }
    }
  }
</script>

<style lang="scss">
  .defaultFont {
    font-family: Segoe WPC,Segoe UI,Microsoft YaHei,sans-serif;
    font-size: 13px;
  }
  $menuBarHeight: 30px;
  $menuBarBackgroundColor:  rgb(50, 50, 51);
  $menuBarColor: rgb(255, 255, 255);
  $subMenuBackgroundColor: #000000;
  .menu-bar{
    @extend .defaultFont;
    height: $menuBarHeight;
    background-color: $menuBarBackgroundColor;
    color: $menuBarColor;
    ul.menu-list{
      padding: 0;
      li.menu-item{
        height: $menuBarHeight;
        line-height: $menuBarHeight;
        text-align: center;
        float: left;
        padding: 0 10px;
        list-style: none;
        cursor: default;
        .menu-sub-items{
          position: fixed;
          background-color: $subMenuBackgroundColor;
          box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.43);
          display: none;
          ul{
            padding: 0;
            li{
              list-style: none;
            }
            .menu-divider{
              height: 1px;
              margin: 3px 10px;
              background-color: #cccccc;
            }
            li.sub-menu-item{
              padding: 1px 30px;
              text-align: left;
            }
            li.sub-menu-item:hover{
              background-color: rgba($color: #088dfa, $alpha: 0.5);
            }
          }
        }
      }
      li.menu-item:hover{
        background-color: rgba($color: #cccccc, $alpha: 0.3);
      }
    }
  }
</style>
