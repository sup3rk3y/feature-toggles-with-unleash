<template>
  <div class="todo-list">
    <h1>Todo list:</h1>

    <p v-if="!list.length">The list is empty :(</p>

    <ul
      v-for="(item, index) in list"
      v-else
      :key="`${item}_${index}`"
      class="todo-list__item-list"
    >
      <li>{{ item }}</li>
    </ul>

    <form class="todo-list__form" @submit.prevent="addTodo">
      <input v-model="inputText" type="text" />

      <!-- The name of the toggle / flag should match exactly with the name as created in Unleash UI -->
      <new-button v-if="$isToggleEnabled('test9000')" :text="formButtonText" />

      <button v-else class="todo-list__form-button" type="submit">
        {{ formButtonText }}
      </button>
    </form>
  </div>
</template>

<script>
import NewButton from '@/components/new-button/new-button.vue'
export default {
  name: 'TodoList',

  components: { NewButton },

  data() {
    return {
      list: [],
      inputText: '',
      formButtonText: 'Add a Todo',
    }
  },

  methods: {
    addTodo() {
      if (!this.inputText.length) return

      this.list.push(this.inputText)

      this.inputText = ''
    },
  },
}
</script>

<style lang="scss" src="./todo-list.scss" scoped />
