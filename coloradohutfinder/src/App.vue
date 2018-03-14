<template>
  <v-app>
    <Sidebar/>
    <Header/>
      <router-view></router-view>
    <v-footer :fixed="fixed" app>
      <span id="copyright">&copy; 2018 Brandon Johnson</span>
      <span><ul class="linkwrapper">
        </ul>
        </span>
    </v-footer>
  </v-app>
</template>

<script>
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
export default {
  components: { Header, Sidebar },
  data() {
    return {
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
  name: 'App'
};
</script>
<style scoped>
router-view {
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

