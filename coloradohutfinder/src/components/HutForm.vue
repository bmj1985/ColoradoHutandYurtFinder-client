<template>
<div id="hutform">
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-text-field
      label="Hut Name"
      v-model="HutName"
      :rules="nameRules"
      :counter="30"
      required
    ></v-text-field>
    <v-text-field
      label="Elevation"
      v-model="Elevation"
      :rules="numberRules"
      :counter="10"
      required
    ></v-text-field>
    <v-text-field
      label="Name"
      v-model="name"
      :rules="nameRules"
      :counter="10"
      required
    ></v-text-field>
    <v-text-field
      label="Name"
      v-model="name"
      :rules="nameRules"
      :counter="10"
      required
    ></v-text-field>
    <v-text-field
      label="Name"
      v-model="name"
      :rules="nameRules"
      :counter="10"
      required
    ></v-text-field>
    <v-text-field
      label="E-mail"
      v-model="email"
      :rules="emailRules"
      required
    >THE TEXT FIELD</v-text-field>
    <v-select
      label="Season's Open"
      v-model="select"
      :items="Seasons_Open"
      :rules="[v => !!v || 'Item is required']"
      required
    ></v-select>
    <p>Season's Open</p>
    <v-checkbox
      label="Open in Summer"
      v-model="Seasons_Open[0]"
      :rules="[v => !!v || 'Open in Winter']"
    ></v-checkbox>
     <v-switch
      :label="`Gear Delivery: ${Gear_Delivery.toString()}`"
      v-model="Gear_Delivery"
    ></v-switch>

    <v-btn
      @click="post"
      :disabled="!valid"
    >
      submit
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
  </div>
</template>
<script>
export default {
  name: 'HutForm',
  data: () => ({
    switch1: true,
    postUrl: 'https://coloradohutandyurtfinder.herokuapp.com/huts',
    HutName: '',
    Elevation: 0,
    Trailhead_Elevation: 0,
    Elevation_Gain_From_Trailhead: 0,
    Location: [0, 0],
    Distance_From_Trailhead: 0,
    Distance_From_Nearest_Hut: 0,
    Estimated_Time_In: 0,
    Estimated_Time_Out: 0,
    Contact_Number: '',
    Description: '',
    Booking_Url: '',
    Cost_Per_Person: 33,
    Summer_Capacity: 16,
    Winter_Capacity: 16,
    Seasons_Open: ['Summer', 'Winter'],
    Minimum_No_of_Spaces: 0,
    Single_Party_Bookings_Only: false,
    Multiple_Groups_Can_Book: true,
    Dogs_Allowed: false,
    Gear_Delivery: false,
    WINTER_Water_Snowmelt: true,
    WINTER_Water_Cistern_non_potable: true,
    WINTER_Water_Running_water_potable: false,
    WINTER_Water_Spring_stream_lake_non_potable: false,
    Suggested_SUMMER_Vehicle_Access:
      'Extreme 4 wheel drive road. High clearance required',
    SUMMER_Parking_Available_On_site: true,
    Summer_Gear_Carts_at_Parking: false,
    SUMMER_Outdoor_Fire_Ring: true,
    SUMMER_Water_Cistern_not_potable_on_site: true,
    SUMMER_Water_Running_potable_on_site: false,
    SUMMER_Water_None_bring_your_own_water: false,
    SUMMER_Water_less_than_one_quarter_mi_to_Spring_stream_lake_non_potable: false,
    SUMMER_Water_greater_than_one_quarter_mi_to_Spring_stream_lake_non_potable: true,
    FOOD_Guests_bring_prepare_their_own: true,
    REFRIGERATION: false,
    DISHES_POTS_PANS_UTENSILS_CLEANING_SUPPLIES: true,
    BURNERS: 'Propane',
    OVEN: 'Woodburning',
    GRILL: false,
    GUESTS_MAY_BRING_OWN_GRILL_Restrictions_may_apply: true,
    HEAT: ['Wood'],
    OUTHOUSE_With_covered_walkway: false,
    OUTHOUSE_No_covered_walkway_walk_a_short_distance: true,
    INDOOR_COMPOSTING_TOILET: false,
    INDOOR_FLUSH_TOILET: false,
    TOILET_PAPER_PROVIDED: true,
    MATTRESSES_PROVIDED: true,
    PILLOWS_PROVIDED: true,
    SLEEPING_BAGS: false,
    GUESTS_CLEAN_HUT_OR_YURT_BEFORE_DEPARTURE: true,
    GUESTS_CARRY_OUT_THEIR_TRASH_Trashbags_provided: true,
    LIGHTING: 'Electric',
    SAUNA: false,
    ELECTRICAL_OUTLETS_FOR_GUEST_USE: false,
    PROPERTY_IS_ADA_COMPLIANT: false,
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 30) || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        'E-mail must be valid'
    ],
    numberRules: [
      v => !!v || 'Number is required',
      v => (v && typeof v === 'number') || 'Input must be a valid number'
    ],
    select: null,
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    checkbox: false
  }),
  methods: {
    post() {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        fetch(this.postUrl, {
          headers: new Headers({
            'Content-Type': 'application/json'
          }),
          method: 'POST',
          body: JSON.stringify({
            HutName: this.HutName,
            Elevation: 11370,
            Trailhead_Elevation: 10137,
            Elevation_Gain_From_Trailhead: 1233,
            Location: [39.3689, -106.3868],
            Distance_From_Trailhead: 4.4,
            Distance_From_Nearest_Hut: 0,
            Estimated_Time_In: 4.5,
            Estimated_Time_Out: 3,
            Contact_Number: '970-925-5775',
            Description:
              'Nestled at timberline below the majestic peaks of the Colorado Continental Divide, 10th Mountain Division Hut forms a perfect destination for a single hut trip or ski-through using other nearby huts. In summer, dozens of hiking and cycling routes start or end just outside the door.',
            Booking_Url: 'http://www.huts.org/',
            Cost_Per_Person: 33,
            Summer_Capacity: 16,
            Winter_Capacity: 16,
            Seasons_Open: ['Summer, Winter'],
            Minimum_No_of_Spaces: 1,
            Single_Party_Bookings_Only: false,
            Multiple_Groups_Can_Book: true,
            Dogs_Allowed: false,
            Gear_Delivery: false,
            WINTER_Water_Snowmelt: true,
            WINTER_Water_Cistern_non_potable: true,
            WINTER_Water_Running_water_potable: false,
            WINTER_Water_Spring_stream_lake_non_potable: false,
            Suggested_SUMMER_Vehicle_Access:
              'Extreme 4 wheel drive road. High clearance required',
            SUMMER_Parking_Available_On_site: true,
            Summer_Gear_Carts_at_Parking: false,
            SUMMER_Outdoor_Fire_Ring: true,
            SUMMER_Water_Cistern_not_potable_on_site: true,
            SUMMER_Water_Running_potable_on_site: false,
            SUMMER_Water_None_bring_your_own_water: false,
            SUMMER_Water_less_than_one_quarter_mi_to_Spring_stream_lake_non_potable: false,
            SUMMER_Water_greater_than_one_quarter_mi_to_Spring_stream_lake_non_potable: true,
            FOOD_Guests_bring_prepare_their_own: true,
            REFRIGERATION: false,
            DISHES_POTS_PANS_UTENSILS_CLEANING_SUPPLIES: true,
            BURNERS: 'Propane',
            OVEN: 'Woodburning',
            GRILL: false,
            GUESTS_MAY_BRING_OWN_GRILL_Restrictions_may_apply: true,
            HEAT: ['Wood'],
            OUTHOUSE_With_covered_walkway: false,
            OUTHOUSE_No_covered_walkway_walk_a_short_distance: true,
            INDOOR_COMPOSTING_TOILET: false,
            INDOOR_FLUSH_TOILET: false,
            TOILET_PAPER_PROVIDED: true,
            MATTRESSES_PROVIDED: true,
            PILLOWS_PROVIDED: true,
            SLEEPING_BAGS: false,
            GUESTS_CLEAN_HUT_OR_YURT_BEFORE_DEPARTURE: true,
            GUESTS_CARRY_OUT_THEIR_TRASH_Trashbags_provided: true,
            LIGHTING: 'Electric',
            SAUNA: false,
            ELECTRICAL_OUTLETS_FOR_GUEST_USE: false,
            PROPERTY_IS_ADA_COMPLIANT: false
          })
        })
          .then(response => response.json())
          .then(response => {
            console.log(response);
          })
          .catch(err => console.log('Request failed', err));
      }
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>
<style scoped>
#hutform {
  margin: 10vh;
  align-self: center;
}
</style>
