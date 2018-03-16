<template>
<div>
  <ul>
<li><h2>{{hut.HutName}}</h2></li>
<li><h2>Elevation: {{hut.Elevation}}</h2></li>
<li><h2>Loc: {{hut.Location[0]}}, {{hut.Location[1]}}</h2></li>
<li><h2>Description:{{hut.Description}}</h2></li>
<li><h2><a :href="hut.Booking_Url">{{hut.Booking_Url}}</a></h2></li>
</ul>
<div v-if="showDeleteConfirmation === false">
  <!-- <Dialog></Dialog> -->
  <v-btn @click="resetDelete">DELETE HUT</v-btn>
  <v-btn router-link :to="{name: 'EditHut', params: { hut } }">EDIT HUT</v-btn>  
  </div>
  <div v-else-if="showDeleteConfirmation === true">
    <v-btn  color="success" @click="showDeleteConfirmation =! showDeleteConfirmation">NO, I DO NOT WANT TO DELETE THIS HUT</v-btn>
    <v-btn color="error" @click="deleteHut(hut.id)">YES, I'M SURE I WANT TO DELETE THIS HUT</v-btn>
  </div>
</div>

</template>

<script>
// import Dialog from '@/components/Dialog'
export default {
  name: 'HutInfo',
  // components: { Dialog },
  props: ['hut', 'deleteHut'],
  data () {
    return {
      deleteUrl: 'https://coloradohutandyurtfinder.herokuapp.com/huts/',
      showDeleteConfirmation: false
    }
  },
  methods: {
    resetDelete () {
      this.showDeleteConfirmation = !this.showDeleteConfirmation
      setTimeout(() => {
        this.showDeleteConfirmation = false
      }, 5000)
    }
  }
}
</script>