<template>
<div>
  <ul>
<li><p>{{m.HutName}}</p></li>
<li><p>{{m.Description}}</p></li>
</ul>
<p>TEST TEST TEST</p>
</div>
</template>

<script>
  export default {
    name: 'HutInfo',
    props: ['m'],
    mounted() {
      this.logHut();
    },
    methods: {
     
    }
  }
</script>