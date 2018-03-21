<template>
  <v-app>
        <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title @click="$router.push('HutMap')" v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
       <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="getDataFromDatabase" router-link to="/">Home</v-btn>
       <v-btn router-link to="createhut">Add Hut</v-btn>
       <v-btn router-link to="users">Log In</v-btn>
    </v-toolbar>
      <router-view id="router" :huts="huts"></router-view>
    <v-footer :fixed="fixed" app>
      <span id="copyright">&copy; 2018 Brandon Johnson</span>
      <span><ul class="linkwrapper">
        </ul>
        </span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      hutAPI_Url: window.location.hostname === 'localhost'
  ? 'http://localhost:3000/api/v1/huts'
  : 'https://coloradohutfinder.herokuapp.com/api/v1/huts/',
      huts: [],
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'bubble_chart',
          title: 'Hut Sorting Criteria'
        }
      ],
      miniVariant: false,
      right: true,
      title: 'Colorado Hut and Yurt Finder',
      newHut: false
    }
  },
  mounted () {
    this.getDataFromDatabase()
  },
  methods: {
    getDataFromDatabase () {
      fetch(this.hutAPI_Url)
        .then(response => response.json())
        .then(response => {
          this.huts = response.hutsAndYurts
        })
    }
  }
}
</script>
<style scoped>
#router {
  height: 100vh;
  width: 100vw;
}
footer {
  display: flex;
  justify-content: space-between;
}
#copyright {
  margin-left: 2vw;
}
.linkwrapper {
  margin-right: 2vw;
}

.links {
  display: inline;
}
</style>

