<template>
  <div id="app">
    <header>
      <title-bar />
    </header>
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
    <LeftSidePanel></LeftSidePanel>
    <!-- <button @click="show = true" class="btn btn-dark">ssss</button> -->
  </div>
</template>

<script>
import TitleBar from './views/TitleBar'
import Dialog from './components/Dialog'
import LeftSidePanel from './views/LeftSidePanel'
export default {
  name: 'api_tester',
  data () {
    return {
      show: false
    }
  },
  components: {
    TitleBar,
    Dialog,
    LeftSidePanel
  }
}
</script>