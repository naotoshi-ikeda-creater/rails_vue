<template>
  <div class="about">
    <h1>This is an about page</h1>

    <v-text-field v-model="input"></v-text-field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ""
    };
  }
};
</script>
