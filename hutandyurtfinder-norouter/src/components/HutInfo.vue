<template>
<div>
<div>
<p>{{marker.HutName}}</p>
<p>{{marker.Desription}}</p>
<!-- <p>{{}}</p>
<p>{{}}</p>
<p>{{}}</p>
<p>{{}}</p>
<p>{{}}</p>
<p>{{}}</p>
<p>{{}}</p>
<p>{{}}</p>
<p>{{}}</p> -->
</div>
</div>
</template>

<script>
  export default {
    name: 'HutInfo',
    props: ['marker'],
    mounted() {
      this.logHut();
    },
    methods: {
      logHut(){
        console.log(hut)
      }
    }
  }
</script>