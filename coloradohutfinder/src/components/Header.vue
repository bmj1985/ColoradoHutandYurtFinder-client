<template>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon router-link to ="hutselector" v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn router-link to="/">Home</v-btn>
      <!-- <v-btn router-link to="/dialog">Dialog</v-btn> -->
       <v-btn router-link to="createhut">Add Hut</v-btn>

       <v-btn>About</v-btn>
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