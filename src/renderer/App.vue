<template>
  <div id="app">
    <title-bar />
    <Dialog :is-show="show" @on-close="show = false">
      <span slot="modal-title">aaa</span>
      <div slot="modal-body">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
      </div>
      <div slot="modal-footer">
        <button type="button" class="btn btn-secondary" @click="show = false">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </Dialog>
    <Split style="height: calc(100vh - 30px);">
      <SplitArea :size="25" :minSize="296">
        <LeftSidePanel></LeftSidePanel>
      </SplitArea>
      <SplitArea :size="75" :minSize="rightSideWidth">
        <RightSidePanel></RightSidePanel>
      </SplitArea>
    </Split>
    <!-- <button @click="show = true" class="btn btn-dark">ssss</button> -->
  </div>
</template>

<script>
import TitleBar from './views/TitleBar'
import Dialog from './components/Dialog'
import LeftSidePanel from './views/LeftSidePanel'
import RightSidePanel from './views/RightSidePanel'

export default {
  name: 'api_tester',
  data () {
    return {
      show: false,
      rightSideWidth: window.innerWidth / 2
    }
  },
  components: {
    TitleBar,
    Dialog,
    LeftSidePanel,
    RightSidePanel
  },
  mounted () {
    this.$electron.remote.getCurrentWindow().on('resize', (e) => {
      this.rightSideWidth = e.sender.getSize()[0] / 2
    })
  }
}
</script>

<style lang="scss">
  .gutter{
    background-color: #00000014;
  }
</style>
