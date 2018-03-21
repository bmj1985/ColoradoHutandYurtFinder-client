<template>
<div id="editwrapper">
<div id="edithut">
  <v-form id="edithutform" ref="form">
    <v-text-field
      label="Hut Name"
      v-model="HutName"
    ></v-text-field>
    <v-text-field
      label="Elevation"
      v-model="Elevation"
    ></v-text-field>
    <v-text-field
      label="Trailhead_Elevation"
      v-model="Trailhead_Elevation"
    ></v-text-field>
    <v-text-field
      label="Elevation_Gain_From_Trailhead"
      v-model="Elevation_Gain_From_Trailhead"
    ></v-text-field>
    <v-text-field
      label="Longitude"
      v-model="Longitude"
    ></v-text-field>
    <v-text-field
      label="Latitude"
      v-model="Latitude"
    ></v-text-field>
    <v-text-field
      label="Distance_From_Trailhead"
      v-model="Distance_From_Trailhead"
    ></v-text-field>
      <v-text-field
      label="Distance_From_Nearest_Hut"
      v-model="Distance_From_Nearest_Hut"
    ></v-text-field>
        <v-text-field
      label="Estimated_Time_In"
      v-model="Estimated_Time_In"
    ></v-text-field>
          <v-text-field
      label="Estimated_Time_Out"
      v-model="Estimated_Time_Out"
    ></v-text-field>
            <v-text-field
      label="Contact_Number"
      v-model="Contact_Number"
    ></v-text-field>
               <v-text-field
      label="Description"
      v-model="Description"
      multi-line
    ></v-text-field>
                 <v-text-field
      label="Booking_Url"
      v-model="Booking_Url"
    ></v-text-field>
                    <v-text-field
      label="Cost_Per_Person"
      v-model="Cost_Per_Person"
    ></v-text-field>
    <div class="switches">
     <v-switch
      :label="`Gear Delivery: ${Gear_Delivery.toString()}`"
      v-model="Gear_Delivery"
    ></v-switch>
        <v-switch
      :label="`Single Party Bookings Only: ${Single_Party_Bookings_Only.toString()}`"
      v-model="Single_Party_Bookings_Only"
    ></v-switch>
    <v-switch 
      :label="`Available to multiple groups: ${Multiple_Groups_Can_Book.toString()}`"
      v-model="Multiple_Groups_Can_Book"
    ></v-switch>
    <v-switch
      :label="`Dogs Allowed: ${Dogs_Allowed.toString()}`"
      v-model="Dogs_Allowed"
    ></v-switch>
      <v-switch
      :label="`REFRIGERATION: ${REFRIGERATION.toString()}`"
      v-model="REFRIGERATION"
    ></v-switch>
    <v-switch
      :label="`Sleeping Bags Available to Rent: ${SLEEPING_BAGS.toString()}`"
      v-model="SLEEPING_BAGS"
    ></v-switch>
        <v-switch
      :label="`WINTER_Water_Cistern_non_potable: ${WINTER_Water_Cistern_non_potable.toString()}`"
      v-model="WINTER_Water_Cistern_non_potable"
    ></v-switch>
    <v-switch
      :label="`SAUNA: ${SAUNA.toString()}`"
      v-model="SAUNA"
    ></v-switch>
    <v-switch
      :label="`PROPERTY_IS_ADA_COMPLIANT: ${PROPERTY_IS_ADA_COMPLIANT.toString()}`"
      v-model="PROPERTY_IS_ADA_COMPLIANT"
    ></v-switch>
    </div>

    <v-btn
      @click="editHut"
    >
      submit
    </v-btn>
  </v-form>
    <p id="submissionconfirmation" v-model="submissionText">{{submissionText}}</p>
  </div>
  </div>
</template>
<script>
export default {
  name: 'EditHut',
  data () {
    return {
      hutAPI_Url: window.location.hostname === 'localhost'
        ? 'http://localhost:3000/api/v1/huts/'
        : 'https://coloradohutfinder.herokuapp.com/api/v1/huts/',
      hut: {},
      valid: true,
      HutName: '',
      Elevation: 0,
      Trailhead_Elevation: 0,
      Elevation_Gain_From_Trailhead: 0,
      Longitude: 0,
      Latitude: 0,
      Distance_From_Trailhead: 0,
      Distance_From_Nearest_Hut: 0,
      Estimated_Time_In: 0,
      Estimated_Time_Out: 0,
      Contact_Number: '',
      Description: '',
      Booking_Url: '',
      Cost_Per_Person: 0,
      Summer_Capacity: 0,
      Winter_Capacity: 0,
      Seasons_Open: ['', ''],
      Minimum_No_of_Spaces: 0,
      Single_Party_Bookings_Only: false,
      Multiple_Groups_Can_Book: true,
      Dogs_Allowed: false,
      Gear_Delivery: false,
      WINTER_Water_Snowmelt: false,
      WINTER_Water_Cistern_non_potable: false,
      WINTER_Water_Running_water_potable: false,
      WINTER_Water_Spring_stream_lake_non_potable: false,
      Suggested_SUMMER_Vehicle_Access: '',
      SUMMER_Parking_Available_On_site: false,
      Summer_Gear_Carts_at_Parking: false,
      SUMMER_Outdoor_Fire_Ring: false,
      SUMMER_Water_Cistern_not_potable_on_site: false,
      SUMMER_Water_Running_potable_on_site: false,
      SUMMER_Water_None_bring_your_own_water: false,
      SUMMER_Water_less_than_one_quarter_mi_to_Spring_stream_lake_non_potable: false,
      SUMMER_Water_greater_than_one_quarter_mi_to_Spring_stream_lake_non_potable: false,
      FOOD_Guests_bring_prepare_their_own: false,
      REFRIGERATION: false,
      DISHES_POTS_PANS_UTENSILS_CLEANING_SUPPLIES: false,
      BURNERS: '',
      OVEN: '',
      GRILL: false,
      GUESTS_MAY_BRING_OWN_GRILL_Restrictions_may_apply: false,
      HEAT: [],
      OUTHOUSE_With_covered_walkway: false,
      OUTHOUSE_No_covered_walkway_walk_a_short_distance: false,
      INDOOR_COMPOSTING_TOILET: false,
      INDOOR_FLUSH_TOILET: false,
      TOILET_PAPER_PROVIDED: false,
      MATTRESSES_PROVIDED: false,
      PILLOWS_PROVIDED: false,
      SLEEPING_BAGS: false,
      GUESTS_CLEAN_HUT_OR_YURT_BEFORE_DEPARTURE: false,
      GUESTS_CARRY_OUT_THEIR_TRASH_Trashbags_provided: false,
      LIGHTING: '',
      SAUNA: false,
      ELECTRICAL_OUTLETS_FOR_GUEST_USE: false,
      PROPERTY_IS_ADA_COMPLIANT: false,
      checkbox: false,
      submissionText: ''
    }
  },
  watch: {
    hut (hut) {
      if (this.hut !== {}) {
        this.createInitialValues()
      }
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
          return response.hutsAndYurts.filter(hut => {
            if (this.$route.params.id === hut.id) {
              this.hut = hut
              return hut
            }
          })
        })
    },
    createInitialValues () {
      this.HutName = this.hut.HutName
      this.Elevation = this.hut.Elevation
      this.Trailhead_Elevation = this.hut.Trailhead_Elevation
      this.Elevation_Gain_From_Trailhead = this.hut.Elevation_Gain_From_Trailhead
      this.Longitude = this.hut.Location[0]
      this.Latitude = this.hut.Location[1]
      this.Distance_From_Trailhead = this.hut.Distance_From_Trailhead
      this.Distance_From_Nearest_Hut = this.hut.Distance_From_Nearest_Hut
      this.Estimated_Time_In = this.hut.Estimated_Time_In
      this.Estimated_Time_Out = this.hut.Estimated_Time_Out
      this.Contact_Number = this.hut.Contact_Number
      this.Description = this.hut.Description
      this.Booking_Url = this.hut.Booking_Url
      this.Cost_Per_Person = this.hut.Cost_Per_Person
      this.Summer_Capacity = this.hut.Summer_Capacity
      this.Winter_Capacity = this.hut.Winter_Capacity
      this.Seasons_Open = this.hut.Seasons_Open
      this.Minimum_No_of_Spaces = this.hut.Minimum_No_of_Spaces
      this.Single_Party_Bookings_Only = this.hut.Single_Party_Bookings_Only
      this.Multiple_Groups_Can_Book = this.hut.Multiple_Groups_Can_Book
      this.Dogs_Allowed = this.hut.Dogs_Allowed
      this.Gear_Delivery = this.hut.Gear_Delivery
      this.WINTER_Water_Snowmelt = this.hut.WINTER_Water_Snowmelt
      this.WINTER_Water_Cistern_non_potable = this.hut.WINTER_Water_Cistern_non_potable
      this.WINTER_Water_Running_water_potable = this.hut.WINTER_Water_Running_water_potable
      this.WINTER_Water_Spring_stream_lake_non_potable = this.hut.WINTER_Water_Spring_stream_lake_non_potable
      this.Suggested_SUMMER_Vehicle_Access = this.hut.Suggested_SUMMER_Vehicle_Access
      this.SUMMER_Parking_Available_On_site = this.hut.SUMMER_Parking_Available_On_site
      this.Summer_Gear_Carts_at_Parking = this.hut.Summer_Gear_Carts_at_Parking
      this.SUMMER_Outdoor_Fire_Ring = this.hut.SUMMER_Outdoor_Fire_Ring
      this.SUMMER_Water_Cistern_not_potable_on_site = this.hut.SUMMER_Water_Cistern_not_potable_on_site
      this.SUMMER_Water_Running_potable_on_site = this.hut.SUMMER_Water_Cistern_not_potable_on_site
      this.SUMMER_Water_None_bring_your_own_water = this.hut.SUMMER_Water_None_bring_your_own_water
      this.SUMMER_Water_less_than_one_quarter_mi_to_Spring_stream_lake_non_potable = this.hut.SUMMER_Water_less_than_one_quarter_mi_to_Spring_stream_lake_non_potable
      this.SUMMER_Water_greater_than_one_quarter_mi_to_Spring_stream_lake_non_potable = this.hut.SUMMER_Water_greater_than_one_quarter_mi_to_Spring_stream_lake_non_potable
      this.FOOD_Guests_bring_prepare_their_own = this.hut.FOOD_Guests_bring_prepare_their_own
      this.REFRIGERATION = this.hut.REFRIGERATION
      this.DISHES_POTS_PANS_UTENSILS_CLEANING_SUPPLIES = this.hut.DISHES_POTS_PANS_UTENSILS_CLEANING_SUPPLIES
      this.BURNERS = this.hut.BURNERS
      this.OVEN = this.hut.OVEN
      this.GRILL = this.hut.GRILL
      this.GUESTS_MAY_BRING_OWN_GRILL_Restrictions_may_apply = this.hut.GUESTS_MAY_BRING_OWN_GRILL_Restrictions_may_apply
      this.HEAT = this.hut.HEAT
      this.OUTHOUSE_With_covered_walkway = this.hut.OUTHOUSE_With_covered_walkway
      this.OUTHOUSE_No_covered_walkway_walk_a_short_distance = this.hut.OUTHOUSE_No_covered_walkway_walk_a_short_distance
      this.INDOOR_COMPOSTING_TOILET = this.hut.INDOOR_COMPOSTING_TOILET
      this.INDOOR_FLUSH_TOILET = this.hut.INDOOR_FLUSH_TOILET
      this.TOILET_PAPER_PROVIDED = this.hut.TOILET_PAPER_PROVIDED
      this.MATTRESSES_PROVIDED = this.hut.MATTRESSES_PROVIDED
      this.PILLOWS_PROVIDED = this.hut.PILLOWS_PROVIDED
      this.SLEEPING_BAGS = this.hut.SLEEPING_BAGS
      this.GUESTS_CLEAN_HUT_OR_YURT_BEFORE_DEPARTURE = this.hut.GUESTS_CLEAN_HUT_OR_YURT_BEFORE_DEPARTURE
      this.GUESTS_CARRY_OUT_THEIR_TRASH_Trashbags_provided = this.hut.GUESTS_CARRY_OUT_THEIR_TRASH_Trashbags_provided
      this.LIGHTING = this.hut.LIGHTING
      this.SAUNA = this.hut.SAUNA
      this.ELECTRICAL_OUTLETS_FOR_GUEST_USE = this.hut.ELECTRICAL_OUTLETS_FOR_GUEST_USE
      this.PROPERTY_IS_ADA_COMPLIANT = this.hut.PROPERTY_IS_ADA_COMPLIANT
    },
    editHut (id) {
      fetch(this.hutAPI_Url + this.$route.params.id, {
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        method: 'PUT',
        body: JSON.stringify({
          HutName: this.HutName,
          Elevation: this.Elevation,
          Trailhead_Elevation: this.Trailhead_Elevation,
          Elevation_Gain_From_Trailhead: this.Elevation_Gain_From_Trailhead,
          Location: [this.Longitude, this.Latitude],
          Distance_From_Trailhead: this.Distance_From_Trailhead,
          Distance_From_Nearest_Hut: this.Distance_From_Nearest_Hut,
          Estimated_Time_In: this.Estimated_Time_In,
          Estimated_Time_Out: this.Estimated_Time_Out,
          Contact_Number: this.Contact_Number,
          Description: this.Description,
          Booking_Url: this.Booking_Url,
          Cost_Per_Person: this.Cost_Per_Person,
          Summer_Capacity: this.Summer_Capacity,
          Winter_Capacity: this.Winter_Capacity,
          Seasons_Open: this.Seasons_Open,
          Minimum_No_of_Spaces: this.Minimum_No_of_Spaces,
          Single_Party_Bookings_Only: this.Single_Party_Bookings_Only,
          Multiple_Groups_Can_Book: this.Multiple_Groups_Can_Book,
          Dogs_Allowed: this.Dogs_Allowed,
          Gear_Delivery: this.Gear_Delivery,
          WINTER_Water_Snowmelt: this.WINTER_Water_Snowmelt,
          WINTER_Water_Cistern_non_potable: this
            .WINTER_Water_Cistern_non_potable,
          WINTER_Water_Running_water_potable: this
            .WINTER_Water_Running_water_potable,
          WINTER_Water_Spring_stream_lake_non_potable: this
            .WINTER_Water_Spring_stream_lake_non_potable,
          Suggested_SUMMER_Vehicle_Access: this.Suggested_SUMMER_Vehicle_Access,
          SUMMER_Parking_Available_On_site: this
            .SUMMER_Parking_Available_On_site,
          Summer_Gear_Carts_at_Parking: this.Summer_Gear_Carts_at_Parking,
          SUMMER_Outdoor_Fire_Ring: this.SUMMER_Outdoor_Fire_Ring,
          SUMMER_Water_Cistern_not_potable_on_site: this
            .SUMMER_Water_Cistern_not_potable_on_site,
          SUMMER_Water_Running_potable_on_site: this
            .SUMMER_Water_Cistern_not_potable_on_site,
          SUMMER_Water_None_bring_your_own_water: this
            .SUMMER_Water_None_bring_your_own_water,
          SUMMER_Water_less_than_one_quarter_mi_to_Spring_stream_lake_non_potable: this
            .SUMMER_Water_less_than_one_quarter_mi_to_Spring_stream_lake_non_potable,
          SUMMER_Water_greater_than_one_quarter_mi_to_Spring_stream_lake_non_potable: this
            .SUMMER_Water_greater_than_one_quarter_mi_to_Spring_stream_lake_non_potable,
          FOOD_Guests_bring_prepare_their_own: this
            .FOOD_Guests_bring_prepare_their_own,
          REFRIGERATION: this.REFRIGERATION,
          DISHES_POTS_PANS_UTENSILS_CLEANING_SUPPLIES: this
            .DISHES_POTS_PANS_UTENSILS_CLEANING_SUPPLIES,
          BURNERS: this.BURNERS,
          OVEN: this.OVEN,
          GRILL: this.GRILL,
          GUESTS_MAY_BRING_OWN_GRILL_Restrictions_may_apply: this
            .GUESTS_MAY_BRING_OWN_GRILL_Restrictions_may_apply,
          HEAT: this.HEAT,
          OUTHOUSE_With_covered_walkway: this.OUTHOUSE_With_covered_walkway,
          OUTHOUSE_No_covered_walkway_walk_a_short_distance: this
            .OUTHOUSE_No_covered_walkway_walk_a_short_distance,
          INDOOR_COMPOSTING_TOILET: this.INDOOR_COMPOSTING_TOILET,
          INDOOR_FLUSH_TOILET: this.INDOOR_FLUSH_TOILET,
          TOILET_PAPER_PROVIDED: this.TOILET_PAPER_PROVIDED,
          MATTRESSES_PROVIDED: this.MATTRESSES_PROVIDED,
          PILLOWS_PROVIDED: this.PILLOWS_PROVIDED,
          SLEEPING_BAGS: this.SLEEPING_BAGS,
          GUESTS_CLEAN_HUT_OR_YURT_BEFORE_DEPARTURE: this
            .GUESTS_CLEAN_HUT_OR_YURT_BEFORE_DEPARTURE,
          GUESTS_CARRY_OUT_THEIR_TRASH_Trashbags_provided: this
            .GUESTS_CARRY_OUT_THEIR_TRASH_Trashbags_provided,
          LIGHTING: this.LIGHTING,
          SAUNA: this.SAUNA,
          ELECTRICAL_OUTLETS_FOR_GUEST_USE: this
            .ELECTRICAL_OUTLETS_FOR_GUEST_USE,
          PROPERTY_IS_ADA_COMPLIANT: this.PROPERTY_IS_ADA_COMPLIANT
        })
      })
        .then(response => response.json())
        .then(() => this.confirmSubmission())
        .then(() => this.clear())
        .then(() => {
          setTimeout(() => {
            this.$router.push({ name: 'HutMap' })
          }, 4000)
        })
        .catch(err => console.log('Request failed', err))
    },
    clear () {
      this.$refs.form.reset()
    },
    confirmSubmission () {
      this.submissionText = 'Submission successful!'
    }
  }
}
</script>
<style scoped>
#editwrapper {
  display: flex;
  justify-content: center;
}
#edithut {
  align-self: center;
  margin: 10vh auto auto auto;
  padding: 10vh;
  align-self: center;
  width: 60vw;
}
#edithutform {
  justify-content: space-around;
  width: 50vw;
}
#submissionconfirmation {
  margin: 1vh;
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  font-weight: 300;
}
</style>
