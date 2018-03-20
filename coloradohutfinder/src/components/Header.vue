<template>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn router-link to="/">Home</v-btn>
       <v-btn router-link to="createhut">Add Hut</v-btn>
       <v-btn>Log In</v-btn>
    </v-toolbar>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      miniVariant: false,
      right: true,
      title: 'Colorado Hut and Yurt Finder'
    }
  },
  name: 'Header'
}
</script>