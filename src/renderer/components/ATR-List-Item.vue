<template>
  <li @click="click">{{title}}
    <span class="badge" :class="'badge-'+label.type">{{label.text}}</span>
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    value: {
      type: Object,
      default: () => {
        return {}
      }
    },
    label: {
      type: Object,
      default: () => {
        return {
          type: 'primary',
          text: 'default'
        }
      }
    },
    onclick: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    click () {
      this.onclick(this.value)
    }
  }
}
</script>

<style>

</style>