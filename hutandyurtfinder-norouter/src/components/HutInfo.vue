<template>
<div>
  <ul>
<li><p>{{hut.HutName}}</p></li>
<li><p>{{hut.Description}}</p></li>
<li><p><a :href="hut.Booking_Url">{{hut.Booking_Url}}</a></p></li>
<li><p>{{hut.Description}}</p></li>
<li><p>{{hut.Description}}</p></li>
<li><p>{{hut.Description}}</p></li>
</ul>
</div>
</template>

<script>
  export default {
    name: 'HutInfo',
    props: ['hut'],
    mounted() {
    },
    methods: {
    }
  }
</script>