<template>
  <div id="app">
    <header>
      <title-bar />
    </header>
  </div>
</template>

<script>
import TitleBar from './components/TitleBar'
export default {
  name: 'api_tester',
  data: () => {
    return {
      say: 'hello'
    }
  },
  components: {
    TitleBar
  }
}
</script>