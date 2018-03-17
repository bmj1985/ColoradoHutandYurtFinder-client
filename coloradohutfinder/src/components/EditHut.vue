<template>
<div id="hutform">
  <v-form ref="form">
    <v-text-field
      label="Hut Name"
      v-model="HutName"
    ></v-text-field>
    <v-text-field
      label="Elevation"
    ></v-text-field>

    <v-btn
      @click="post"
    >
      submit
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
  </div>
</template>
<script>
export default {
  name: 'EditHut',
  data () {
    return {
       hutAPI_Url: window.location.hostname === 'localhost'
  ? 'http://localhost:3000/api/v1/huts'
  : 'https://coloradohutfinder.herokuapp.com/api/v1/huts',
      // HutName: this.hut.HutName,
      hut: {}
    }
  },
  mounted () {
    this.getHutData()
  },
  methods: {
    getHutData () {
      fetch(this.hutAPI_Url)
        .then(response => response.json())
        .then(response => {
          response.hutsAndYurts.map(hut => {
            if ($route.params.id === hut.id) {
              this.hut = hut
            }
          })
        })
      }
    }
}
</script>
<style scoped>
#hutform {
  margin: 10vh;
  align-self: center;
  width: 60vw;
}
v-form {
  display: flex;
  justify-content: space-around;
  width: 50vw;
}
</style>
