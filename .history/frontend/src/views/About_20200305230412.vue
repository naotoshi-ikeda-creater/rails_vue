<template>
  <div class="about">
    <h1>This is an about page</h1>

    <v-container>
      <v-col>
        <v-card>
          <v-input v-model="input"></v-input>
          {{ input }}
        </v-card>
      </v-col>
    </v-container>
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
