<template>
  <div>
   <gmap-map id="map" :center="center" :zoom="10">
      <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
      <HutInfo/>
      </gmap-info-window>
      <gmap-marker :key="m.id"
        v-for="hut in huts"
       :position="m.position" :clickable="true" @click="toggleInfoWindow(m,i)">
       </gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
import HutInfo from '@/components/HutInfo';
export default {
  name: 'HutMap',
  props: ['huts'],
  components: {HutInfo},
  data() {
    return {
      center: {
        lat: 39.3689,
        lng: -106.3868
      },
      infoContent: '',
      infoWindowPos: {
        lat: 0,
        lng: 0
      },
      infoWinOpen: false,
      currentMindex: null,
      //optional: offset infowindow so it visually sits nicely on top of our marker
      //  :key="i" v-for="(m,i) in markers" 
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      marker: [
        {
          infoText: 'Marker 1'
        }
      ]
    };
  },
  mounted(){
      this.toggleInfoWindow();
  },
  methods: {
    toggleInfoWindow: function(m, i) {
      console.log(this.huts)
      // console.log('lat', this.m.Location[0], 'lng', this.m.Location[1])
      // this.infoWindowPos = {lat: this.hut.Location[0], lng: this.hut.Location[1]};
      // this.infoContent = marker.infoText;
      // //check if its the same marker that was selected if yes toggle
      // if (this.currentMindex == index) {
      //   this.infoWinOpen = !this.infoWinOpen;
      // } else {
      //   //if different marker set infowindow to open and reset current marker index
      //   this.infoWinOpen = true;
      //   this.currentMindex = index;
      // }
    }
  }
};
</script>

<style scoped>
#map {
height:100vh;
width: 100vw;
}


</style>

