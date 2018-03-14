<template>
<div>
  <ul>
<li><h2>{{hut.HutName}}</h2></li>
<li><h2>Elevation: {{hut.Elevation}}</h2></li>
<li><h2>Loc: {{hut.Location[0]}}, {{hut.Location[1]}}</h2></li>
<li><h2>{{hut.Description}}</h2></li>
<li><h2><a :href="hut.Booking_Url">{{hut.Booking_Url}}</a></h2></li>
</ul>
  <v-btn router-link to="dialog">Edit Hut</v-btn>
</div>
</template>

<script>
export default {
  name: 'HutInfo',
  props: ['hut'],
  mounted() {},
  methods: {}
};
</script>