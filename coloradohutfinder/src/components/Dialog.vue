<template>
  <v-layout row justify-center="">
    <v-dialog v-model="dialog">
      <v-btn color="primary" dark slot="activator">Edit Hut</v-btn>
    
<HutForm/>
     
    </v-dialog>
  </v-layout>
</template>
<script>
import HutForm from '@/components/HutForm'
  export default {
    data () {
      return {
        dialog: false
      }
    }
  }
</script>
<style scoped>
v-dialog {
  width: 60vw;
  height: 60vh;
}
</style>
