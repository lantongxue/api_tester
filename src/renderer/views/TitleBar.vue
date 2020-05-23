<template>
  <div class="title-bar title-bar-row">
    <div class="title-bar-col-4">
      <span class="title-bar-logo">ATR</span>
      <div class="title-bar-menu-bar">
        <slot></slot>
      </div>
    </div>
    <div :class="{'title-bar-col-8': isMacOS, 'title-bar-col-7': !isMacOS}">
      <div class="title-bar-title">{{title}}</div>
    </div>
    <div class="title-bar-col-1" v-if="!isMacOS">
      <div class="title-bar-tools">
        <div class="btn-group">
          <button class="btn window-minimize" type="button" @click="minimize">
            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5006"><path d="M0 544h1024v-64H0z" p-id="5007" fill="#ffffff"></path></svg>
          </button>
          <button class="btn window-maximize" type="button" v-show="!isMaximized" @click="maximize">
            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3452"><path d="M-90.39302107 1114.38819781L-90.39302107-90.38980503l1204.78443333 0 0 1204.77800284L-90.39302107 1114.38819781zM963.79436321 60.20885124L60.20563679 60.20885124l0 903.58872799 903.58872797 0L963.79436321 60.20885124z" p-id="3453" fill="#ffffff"></path></svg>
          </button>
          <button class="btn window-restore" type="button" v-show="isMaximized" @click="restore">
            <svg viewBox="0 0 1157 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1534"><path d="M1086.034 753.71H878.22v269.404h-70.01v-1.33H70.896v1.33H0.886V269.403H269.404V0.887h886.639v752.825h-70.01zM70.896 951.775H808.21V339.413H70.896v612.362z m1015.138-880.88h-746.62v198.509H878.22V683.7h207.813V70.896z" p-id="1535" fill="#ffffff"></path></svg>
          </button>
          <button class="btn window-close" type="button" @click="close">
            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10707"><path d="M584.517818 512L1024 951.482182l-72.517818 72.517818L512 584.517818 72.517818 1024 0 951.482182 439.482182 512 0 72.517818 72.517818 0 512 439.482182 951.482182 0 1024 72.517818 584.517818 512z" p-id="10708" fill="#ffffff"></path></svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isMaximized: false,
      isMacOS: process.platform === 'darwin'
    }
  },
  props: ['title'],
  mounted () {
    this.$electron.remote.getCurrentWindow().on('maximize', (e) => {
      this.isMaximized = true
    })
    this.$electron.remote.getCurrentWindow().on('unmaximize', (e) => {
      this.isMaximized = false
    })
  },
  methods: {
    maximize () {
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
  $subMenuBackgroundColor: #3c3a3a;
  $titleBarLogoSize: 30px;
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
    margin-top: 20px;
    .title-bar-col-1{
      @extend .col-1;
      padding: unset;
    }
    .title-bar-col-4{
      @extend .col-4;
      padding: unset;
    }
    .title-bar-col-5{
      @extend .col-5;
      padding: unset;
    }
    .title-bar-col-6{
      @extend .col-6;
      padding: unset;
    }
    .title-bar-col-7{
      @extend .col-7;
      padding: unset;
    }
    .title-bar-col-8{
      @extend .col-8;
      padding: unset;
    }
    .title-bar-col-9{
      @extend .col-9;
      padding: unset;
    }
    .title-bar-logo{
      width: $titleBarLogoSize;
      height: $titleBarLogoSize;
      float: left;
      padding: 5px;
      color: #adfd63;
      text-shadow: 0 1px 0 red;
    }
   .title-bar-title{
     height: $titleBarHeight;
     padding: 0 8px;
     line-height: $titleBarHeight;
   }
   .title-bar-tools{
     float: right;
     button{
       color:#ffffff;
       background-color: transparent;
       border: none;
       outline: none !important;
       padding: 5.5px 15px;
       border-radius: 0;
       &:hover{
         background-color: rgba($color: #cccccc, $alpha: 0.3);
       }
       &:focus{
        @extend .btn:focus;
        box-shadow: none;
      }
     }
     .window-minimize{
      svg{
        width: 11px;
      }
     }
     .window-maximize{
      svg{
        width: 11px;
      }
     }
     .window-restore{
      svg{
        width: 13px;
      }
     }
     .window-close{
      svg{
        width: 10px;
      }
      &:hover{
        background-color: rgb(187, 31, 31);
      }
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
          z-index: 9999;
          background-color: $subMenuBackgroundColor;
          box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.43);
          display: none;
          ul{
            li{
              list-style: none;
            }
            .title-bar-menu-divider{
              height: 0.1px;
              margin: 3px 10px;
              background-color: #cccccc;
            }
            li.title-bar-sub-menu-item{
              padding: 1px 30px;
              text-align: left;
              &:hover{
                background-color: rgba($color: #088dfa, $alpha: 0.5);
              }
            }
          }
        }
        &:hover{
          background-color: rgba($color: #cccccc, $alpha: 0.3);
        }
      }
    }
  }
  .title-bar-tools{
    -webkit-app-region: no-drag;
  }
</style>
