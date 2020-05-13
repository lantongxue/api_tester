<template>
  <div class="title-bar title-bar-row">
    <div class="title-bar-col-5">
      <div class="title-bar-menu-bar">
        <ul class="title-bar-menu-list">
          <li class="title-bar-menu-item" @mouseenter="rootMenuHover" @mouseleave="rootMenuLeave">
            文件
            <div class="title-bar-menu-sub-items">
              <ul>
                <li class="title-bar-sub-menu-item">新建文件</li>
                <li class="title-bar-sub-menu-item">新建窗口</li>
                <li class="title-bar-menu-divider"></li>
                <li class="title-bar-sub-menu-item">打开文件</li>
                <li class="title-bar-sub-menu-item">打开文件夹</li>
                <li class="title-bar-menu-divider"></li>
                <li class="title-bar-sub-menu-item">退出</li>
              </ul>
            </div>
          </li>
          <li class="title-bar-menu-item" @mouseenter="rootMenuHover" @mouseleave="rootMenuLeave">
            编辑
            <div class="title-bar-menu-sub-items">
              <ul>
                <li class="title-bar-sub-menu-item">2编辑文件</li>
                <li class="title-bar-sub-menu-item">3编辑窗口</li>
                <li class="title-bar-menu-divider"></li>
                <li class="title-bar-sub-menu-item">退出</li>
              </ul>
            </div>
          </li>
          <li class="title-bar-menu-item" @mouseenter="rootMenuHover" @mouseleave="rootMenuLeave">
            选择
            <div class="title-bar-menu-sub-items">
              <ul>
                <li class="title-bar-sub-menu-item">4选择文件</li>
                <li class="title-bar-sub-menu-item">5选择窗口</li>
                <li class="title-bar-menu-divider"></li>
                <li class="title-bar-sub-menu-item">退出</li>
              </ul>
            </div>
          </li>
          <li class="title-bar-menu-item" @mouseenter="rootMenuHover" @mouseleave="rootMenuLeave">
            查看
            <div class="title-bar-menu-sub-items">
              <ul>
                <li class="title-bar-sub-menu-item">5查看文件</li>
                <li class="title-bar-sub-menu-item">6查看窗口</li>
                <li class="title-bar-menu-divider"></li>
                <li class="title-bar-sub-menu-item">退出</li>
              </ul>
            </div>
          </li>
          <li class="title-bar-menu-item" @mouseenter="rootMenuHover" @mouseleave="rootMenuLeave">
            运行
            <div class="title-bar-menu-sub-items">
              <ul>
                <li class="title-bar-sub-menu-item">7运行文件</li>
                <li class="title-bar-sub-menu-item">8运行窗口</li>
                <li class="title-bar-menu-divider"></li>
                <li class="title-bar-sub-menu-item">退出</li>
              </ul>
            </div>
          </li>
          <li class="title-bar-menu-item" @mouseenter="rootMenuHover" @mouseleave="rootMenuLeave">
            终端
            <div class="title-bar-menu-sub-items">
              <ul>
                <li class="title-bar-sub-menu-item">9终端文件</li>
                <li class="title-bar-sub-menu-item">10终端窗口</li>
                <li class="title-bar-menu-divider"></li>
                <li class="title-bar-sub-menu-item">退出</li>
              </ul>
            </div>
          </li>
          <li class="title-bar-menu-item" @mouseenter="rootMenuHover" @mouseleave="rootMenuLeave">
            帮助
            <div class="title-bar-menu-sub-items">
              <ul>
                <li class="title-bar-sub-menu-item">11帮助文件</li>
                <li class="title-bar-sub-menu-item">12帮助窗口</li>
                <li class="title-bar-menu-divider"></li>
                <li class="title-bar-sub-menu-item">退出</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="title-bar-col-6">
      <div class="title-bar-title">asdkadakjdhkjahdkj</div>
    </div>
    <div class="title-bar-col-1">
      <div class="title-bar-tools">
        <div class="btn-group">
          <button class="window-minimize" type="button" @click="minimize">
            <svg fill="#ffffff" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M861.52533333 488.46506667H162.47466667a23.30168889 23.30168889 0 1 0 0 46.60337778h699.05066666a23.30168889 23.30168889 0 1 0 0-46.60337778z" p-id="3707"></path></svg>
          </button>
          <button class="window-maximize" type="button" v-show="!isMaximized" @click="maximize">
            <svg fill="#ffffff" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M832 832H192V192h640v640z m50-690H142v740h740V142z" p-id="1512"></path></svg>
          </button>
          <button class="window-restore" type="button" v-show="isMaximized" @click="restore">
            <svg fill="#ffffff" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M754.49 630.907a20.48 20.48 0 1 0 0 40.96h77.21a20.48 20.48 0 0 0 20.48-20.48V201.83a20.48 20.48 0 0 0-20.48-20.48H382.143a20.48 20.48 0 0 0-20.48 20.48v77.108a20.48 20.48 0 1 0 40.96 0V222.31H811.2v408.597H754.49z" p-id="2723"></path><path d="M217.28 836.69h449.576a20.48 20.48 0 0 0 20.48-20.48V366.653a20.48 20.48 0 0 0-20.48-20.48H217.3a20.48 20.48 0 0 0-20.48 20.48V816.21a20.439 20.439 0 0 0 20.46 20.48z m20.48-449.557h408.616V795.73H237.78V387.133z" p-id="2724"></path></svg>
          </button>
          <button class="window-close" type="button" @click="close">
            <svg fill="#ffffff" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M184.648 836.342a20.5 20.5 0 0 0 28.979-0.02l292.7-293.049 292.7 293.048a20.48 20.48 0 1 0 29-28.938L535.613 514.642l292.393-292.72a20.48 20.48 0 1 0-28.979-28.939l-292.72 293.048-292.7-293.048a20.48 20.48 0 1 0-28.98 28.938L477 514.641 184.627 807.384a20.48 20.48 0 0 0 0.02 28.959z" p-id="5022"></path></svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isMaximized: false
    }
  },
  methods: {
    rootMenuHover ($event) {
      let subMenu = $event.target.querySelector('.title-bar-menu-sub-items')
      if (subMenu !== null) {
        let index = [...document.querySelectorAll('.title-bar-menu-list>.title-bar-menu-item')].indexOf($event.target)
        subMenu.style.left = (($event.target.offsetWidth * index)) + 'px'
        subMenu.style.display = 'block'
      }
    },
    rootMenuLeave ($event) {
      let subMenu = $event.target.querySelector('.title-bar-menu-sub-items')
      if (subMenu !== null) {
        subMenu.style.display = 'none'
      }
    },
    maximize () {
      console.log(this.$electron)
      this.$electron.remote.getCurrentWindow().maximize()
      this.isMaximized = true
    },
    restore () {
      this.$electron.remote.getCurrentWindow().unmaximize()
      this.isMaximized = false
    },
    minimize () {
      this.$electron.remote.getCurrentWindow().minimize()
    },
    close () {
      this.$electron.remote.app.quit()
    }
  }
}
</script>

<style lang="scss">
  @import '../style/main.scss';
  $titleBarHeight: 30px;
  $titleBarBackgroundColor:  rgb(50, 50, 51);
  $titleBarColor: rgb(255, 255, 255);
  $subMenuBackgroundColor: #3c3a3ac9;
  .title-bar.title-bar-row{
    @extend .row;
    margin: unset;
  }
  .title-bar{
    -webkit-user-select: none;
    height: $titleBarHeight;
    background-color: $titleBarBackgroundColor;
    color: $titleBarColor;
    -webkit-app-region: drag;
    .title-bar-col-6{
      @extend .col-6;
      padding: unset;
    }
    .title-bar-col-5{
      @extend .col-5;
      padding: unset;
    }
     .title-bar-col-1{
      @extend .col-1;
      padding: unset;
    }
   .title-bar-title{
     display: inline-flex;
     height: $titleBarHeight;
     position: absolute;
     align-items: center;
     padding: 0 8px;
   }
   .title-bar-tools{
     float: right;
     button{
       color:#ffffff;
       background-color: transparent;
       border: none;
       outline: none;
       padding: 7px;
       font-size: 10px;
     }
     button:hover{
       background-color: rgba($color: #cccccc, $alpha: 0.3);
     }
   }
  }
  .title-bar-menu-bar{
    height: $titleBarHeight;
    ul.title-bar-menu-list{
      li.title-bar-menu-item{
        -webkit-app-region: no-drag;
        height: $titleBarHeight;
        line-height: $titleBarHeight;
        text-align: center;
        float: left;
        padding: 0 10px;
        list-style: none;
        cursor: default;
        .title-bar-menu-sub-items{
          position: fixed;
          background-color: $subMenuBackgroundColor;
          box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.43);
          display: none;
          ul{
            li{
              list-style: none;
            }
            .title-bar-menu-divider{
              height: 1px;
              margin: 3px 10px;
              background-color: #cccccc;
            }
            li.title-bar-sub-menu-item{
              padding: 1px 30px;
              text-align: left;
            }
            li.title-bar-sub-menu-item:hover{
              background-color: rgba($color: #088dfa, $alpha: 0.5);
            }
          }
        }
      }
      li.title-bar-menu-item:hover{
        background-color: rgba($color: #cccccc, $alpha: 0.3);
      }
    }
  }
  .title-bar-tools{
    -webkit-app-region: no-drag;
  }
</style>
