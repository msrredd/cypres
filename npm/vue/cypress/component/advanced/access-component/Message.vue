<template>
  <li
    style="margin-top: 10px"
    class="message"
    @click="handleClick"
  >
    {{ message }}
  </li>
</template>

<script>
export default {
  name: 'Message',
  props: {
    message: {
      type: String,
      required: true,
      validator: (value) => value.length > 1,
    },
    message2: {
      default: 'message 2',
      type: String,
    },
    author: {
      type: String,
      default: 'Paco',
    },
  },
  emits: ['message-clicked'],
  methods: {
    handleClick () {
      console.log('lalala')
      this.$emit('message-clicked', this.message)
    },
  },
}
</script>
