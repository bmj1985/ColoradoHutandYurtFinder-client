<template>
  <div>
   <gmap-map :center="center" :zoom="12" style="width: 100vw; height: 100vh">
      <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
        {{infoContent}}
      </gmap-info-window>
      <gmap-marker :key="i" v-for="(m,i) in markers" :position="m.position" :clickable="true" @click="toggleInfoWindow(m,i)"></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
import Dialog from '@/components/Dialog';
export default {
  name: 'HutMap',
  data() {
    return {
      dialog: false,
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
      currentMidx: null,
      //optional: offset infowindow so it visually sits nicely on top of our marker
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      markers: [
        {
          position: {
            lat: 39.3689,
            lng: -106.3868
          },
          infoText: 'Marker 1'
        },
        {
          position: {
            lat: 39.374592,
            lng: -106.548867
          },
          infoText: 'Marker 2'
        },
        {
          position: {
            lat: 39.379592,
            lng: -106.549867
          },
          infoText: this.Dialog
        }
      ]
    };
  },
  methods: {
    toggleInfoWindow: function(marker, idx) {
      this.infoWindowPos = marker.position;
      this.infoContent = marker.infoText;
      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      } else {
        //if different marker set infowindow to open and reset current marker index
        this.infoWinOpen = true;
        this.currentMidx = idx;
        console.log(this.markers.position);
      }
    }
  }
};
</script>

<style scoped>
/* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
#map {
  height: 100%;
}
/* Optional: Makes the sample page fill the window. */
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
/* The location pointed to by the popup tip. */
.popup-tip-anchor {
  height: 0;
  position: absolute;
  /* The max width of the info window. */
  width: 200px;
}
/* The bubble is anchored above the tip. */
.popup-bubble-anchor {
  position: absolute;
  width: 100%;
  bottom: 8px;
  left: 0;
}
/* Draw the tip. */
.popup-bubble-anchor::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  /* Center the tip horizontally. */
  transform: translate(-50%, 0);
  /* The tip is a https://css-tricks.com/snippets/css/css-triangle/ */
  width: 0;
  height: 0;
  /* The tip is 8px high, and 12px wide. */
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 8px solid white;
}
/* The popup bubble itself. */
.popup-bubble-content {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -100%);
  /* Style the info window. */
  background-color: white;
  padding: 5px;
  border-radius: 5px;
  font-family: sans-serif;
  overflow-y: auto;
  max-height: 60px;
  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.5);
}
</style>

