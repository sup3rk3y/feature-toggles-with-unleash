<template>
  <button type="submit" class="new-button">{{ text }}</button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'NewButton',

  props: {
    text: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" src="./new-button.scss" scoped />
