<template>
  <div class="index_wrapper">
    <todo-list />
  </div>
</template>

<script>
import TodoList from '@/components/todo-list/todo-list.vue'

export default {
  name: 'IndexPage',
  components: { TodoList },

  computed: {
    /* isFeatureEnabled() {
      const activeToggles = this.$store.state['feature-toggles'].featureToggles
      const toggleName = 'test9000'

      return !!activeToggles.find((toggle) => toggle.name === toggleName)
        ?.enabled
    }, */
  },
}
</script>

<style lang="scss" src="./index.scss" scoped />
