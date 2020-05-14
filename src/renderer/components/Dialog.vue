<template>
  <div v-if="isShow">
    <div class="modal-backdrop show" @click="dialogClose"></div>
    <div class="modal show" style="display: block">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <slot name="modal-title">标题</slot>
            </h5>
            <button type="button" class="close" data-dismiss="modal" @click="dialogClose">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <slot name="modal-body"></slot>
          </div>
          <div class="modal-footer">
            <slot name="modal-footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  methods: {
    dialogClose () {
      this.$emit('on-close')
    }
  }
}
</script>

<style lang="scss">
.modal-content{
  @extend .modal-content;
  border-radius: unset;
}
</style>