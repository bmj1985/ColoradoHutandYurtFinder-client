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
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <!-- <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn> -->
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
       <v-btn v-on:click="newHut = !newHut">Submit New Hut</v-btn>
       <v-btn>Edit Current Hut</v-btn>
       <v-btn>About</v-btn>
    </v-toolbar>
    <v-content v-if="newHut === true">
        <HutForm/>
      </v-content>
    <v-content>
      <HutMap :huts="huts"/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span id="copyright">&copy; 2018 Brandon Johnson</span>
      <span><ul class="linkwrapper">
        </ul>
        </span>
    </v-footer>
  </v-app>
</template>

<script>
import HutMap from '@/components/HutMap';
import HutForm from '@/components/HutForm';

export default {
  data() {
    return {
      hutAPI_Url: 'https://coloradohutandyurtfinder.herokuapp.com/huts',
      huts: [],
      clipped: false,
      drawer: true,
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
    };
  },
  name: 'App',
  components: {
    HutMap,
    HutForm
  },
  mounted() {
    this.getDataFromDatabase();
  },
  methods: {
    getDataFromDatabase() {
      fetch(this.hutAPI_Url)
        .then(response => response.json())
        .then(response => {
          this.huts = response.hutsAndYurts;
        });
    }
  }
};
</script>
<style scoped>
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

