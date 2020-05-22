<template>
  <perfect-scrollbar
    :options="{suppressScrollX: true}"
    class="right-side-panel"
  >
    <Split direction="vertical">
      <SplitArea :size="50" :minSize="296">
        <div class="row">
          <div class="col">
            <div class="form-group">
              <Select placeholder="请求方式" :items="methods" :label="request.method" :value="request.method"></Select>
            </div>
          </div>
          <div class="col-7">
            <div class="form-group">
              <input type="text" :value="request.url" class="form-control">
            </div>
          </div>
          <div class="col">
            <div class="form-group">
              <button class="btn btn-primary" @click="click">发送</button>
              <button class="btn btn-success">保存</button>
              <button class="btn btn-info">请求历史</button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <h5 class="tab-title active">Header</h5>
          </div>
          <div class="col">
            <h5 class="tab-title">Query</h5>
          </div>
          <div class="col">
            <h5 class="tab-title">Body</h5>
          </div>
          <div class="col">
            <h5 class="tab-title">Auth</h5>
          </div>
          <div class="col">
            <h5 class="tab-title">Cookies</h5>
          </div>
          <div class="col">
            <h5 class="tab-title">Scripts</h5>
          </div>
        </div>
      </SplitArea>
      <SplitArea :size="50">
        <div>
          <div role="alert" aria-live="assertive" aria-atomic="true" class="toast" data-autohide="false">
            <div class="toast-header">
              <strong class="mr-auto">Bootstrap</strong>
              <small>11 mins ago</small>
              <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="toast-body">
              Hello, world! This is a toast message.
            </div>
          </div>
        </div>
      </SplitArea>
    </Split>

  </perfect-scrollbar>
</template>

<script>
import Select from '../components/Select'

export default {
  name: 'RightSidePanel',
  data () {
    return {
      methods: [
        {label: 'GET', value: 'GET'},
        {label: 'POST', value: 'POST'},
        {label: 'PUT', value: 'PUT'},
        {label: 'HEAD', value: 'HEAD'},
        {label: 'DELETE', value: 'DELETE'},
        {label: 'OPTIONS', value: 'OPTIONS'},
        {label: 'PATCH', value: 'PATCH'}
      ]
    }
  },
  components: {
    Select
  },
  computed: {
    request () {
      return this.$store.state.LoadRequest.main
    }
  },
  methods: {
    click ($event) {
      this.jquery('.toast').toast('show')
    }
  }
}
</script>

<style lang="scss">
.right-side-panel{
    height: calc(100vh - 30px);
    padding: 10px;
}
</style>
