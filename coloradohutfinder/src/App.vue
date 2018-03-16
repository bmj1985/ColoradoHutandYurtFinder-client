<template>
  <v-app>
    <Sidebar/>
    <Header/>
      <router-view :huts="huts"></router-view>
    <v-footer :fixed="fixed" app>
      <span id="copyright">&copy; 2018 Brandon Johnson</span>
      <span><ul class="linkwrapper">
        </ul>
        </span>
    </v-footer>
  </v-app>
</template>

<script>
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
export default {
  name: 'App',
  components: { Header, Sidebar },
  data () {
    return {
      hutAPI_Url: window.location.hostname === 'localhost'
  ? 'http://localhost:3000/api/v1/huts'
  : 'https://coloradohutfinder.herokuapp.com/api/v1/huts',
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

