<template>
  <div>
   <gmap-map id="map" :center="center" :zoom="8" :mapTypeId="mapTypeId" gestureHandling="cooperative">
        <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
         <HutInfo :hut="hut"/>
          </gmap-info-window>
      <gmap-marker :position="m.position" :clickable="true">
      </gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
import HutInfo from '@/components/HutInfo'
export default {
  name: 'Hut',
  components: { HutInfo },
  data () {
    return {
      hutAPI_Url: 'https://coloradohutandyurtfinder.herokuapp.com/huts',
      huts: [],
      hut: {},
      mapTypeId: 'terrain',
      center: {
        lat: 39.3689,
        lng: -106.3868
      },
      markers: [],
      infoWindowPos: {
        lat: 0,
        lng: 0
      },
      infoWinOpen: false,
      currentMidx: null,
      // optional: offset infowindow so it visually sits nicely on top of our marker
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      }
    }
  },
  mounted () {
    this.getDataFromDatabase()
  },
  watch: {
    huts (huts) {
      if (this.huts.length > 1) {
        this.createMarkers()
      }
    }
  },
  methods: {
    getDataFromDatabase () {
      fetch(this.hutAPI_Url)
        .then(response => response.json())
        .then(response => {
          this.huts = response.hutsAndYurts
        })
    },
    mapHuts () {
      this.huts.map(hut => {
        this.hut = hut
      })
    },
    parseHutLocation () {
      this.huts.map(hut => {
        if (hut.Location.length === 0) {
          hut.Location = [40 - Math.random() * 3, -94.6 - Math.random() * 7.4]
        }
      })
    },
    createMarkers () {
      this.parseHutLocation()
      this.markers = this.huts.map(hut => ({
        position: {
          lat: parseFloat(hut.Location[0]),
          lng: parseFloat(hut.Location[1])
        },
        infoText: hut.Description,
        id: hut.id,
        HutName: hut.HutName,
        Elevation: hut.Elevation,
        Trailhead_Elevation: hut.Trailhead_Elevation,
        Elevation_Gain_From_Trailhead: hut.Elevation_Gain_From_Trailhead,
        Location: hut.Location,
        Distance_From_Trailhead: hut.Distance_From_Trailhead,
        Distance_From_Nearest_Hut: hut.Distance_From_Nearest_Hut,
        Estimated_Time_In: hut.Estimated_Time_In,
        Estimated_Time_Out: hut.Estimated_Time_Out,
        Contact_Number: hut.Contact_Number,
        Description: hut.Description,
        Booking_Url: hut.Booking_Url,
        Cost_Per_Person: hut.Cost_Per_Person,
        Summer_Capacity: hut.Summer_Capacity,
        Winter_Capacity: hut.Winter_Capacity,
        Seasons_Open: hut.Seasons_Open,
        Minimum_No_of_Spaces: hut.Minimum_No_of_Spaces,
        Dogs_Allowed: hut.Dogs_Allowed,
        Gear_Delivery: hut.Gear_Delivery,
        WINTER_Water_Snowmelt: hut.WINTER_Water_Snowmelt,
        WINTER_Water_Cistern_non_potable: hut.WINTER_Water_Cistern_non_potable,
        WINTER_Water_Running_water_potable: false,
        WINTER_Water_Spring_stream_lake_non_potable: false,
        Suggested_SUMMER_Vehicle_Access: hut.Suggested_SUMMER_Vehicle_Access,
        SUMMER_Parking_Available_On_site: true,
        Summer_Gear_Carts_at_Parking: false,
        SUMMER_Outdoor_Fire_Ring: true,
        SUMMER_Water_Cistern_not_potable_on_site: true,
        SUMMER_Water_Running_potable_on_site: false,
        SUMMER_Water_None_bring_your_own_water: false,
        SUMMER_Water_less_than_one_quarter_mi_to_Spring_stream_lake_non: false,
        SUMMER_Water_greater_than_one_quarter_mi_to_Spring_stream_lake_: true,
        FOOD_Guests_bring_prepare_their_own: true,
        REFRIGERATION: false,
        DISHES_POTS_PANS_UTENSILS_CLEANING_SUPPLIES: true,
        BURNERS: hut.BURNERS,
        OVEN: hut.OVEN,
        GRILL: hut.GRILL,
        GUESTS_MAY_BRING_OWN_GRILL_Restrictions_may_apply: true,
        HEAT: hut.HEAT,
        OUTHOUSE_With_covered_walkway: false,
        OUTHOUSE_No_covered_walkway_walk_a_short_distance: true,
        INDOOR_COMPOSTING_TOILET: false,
        INDOOR_FLUSH_TOILET: false,
        TOILET_PAPER_PROVIDED: true,
        MATTRESSES_PROVIDED: true,
        PILLOWS_PROVIDED: true,
        SLEEPING_BAGS: hut.SLEEPING_BAGS,
        GUESTS_CLEAN_HUT_OR_YURT_BEFORE_DEPARTURE:
          hut.GUESTS_CLEAN_HUT_OR_YURT_BEFORE_DEPARTURE,
        GUESTS_CARRY_OUT_THEIR_TRASH_Trashbags_provided:
          hut.GUESTS_CARRY_OUT_THEIR_TRASH_Trashbags_provided,
        LIGHTING: hut.LIGHTING,
        SAUNA: hut.SAUNA,
        ELECTRICAL_OUTLETS_FOR_GUEST_USE: hut.ELECTRICAL_OUTLETS_FOR_GUEST_USE,
        PROPERTY_IS_ADA_COMPLIANT: hut.PROPERTY_IS_ADA_COMPLIANT
      }))
    }
  }
}
</script>

<style scoped>
#map {
  height: 95vh;
  width: 100vw;
}
</style>

