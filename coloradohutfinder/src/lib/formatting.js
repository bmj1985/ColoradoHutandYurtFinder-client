/* es-lint-disable */
    Elevation: 0,
    Trailhead_Elevation: 0,
    Elevation_Gain_From_Trailhead: 0,
    Distance_From_Trailhead: 0,
    Distance_From_Nearest_Hut: 0,
    Estimated_Time_In: 0,
    Estimated_Time_Out: 0,
    Cost_Per_Person: 0,
    Summer_Capacity: 0,
    Winter_Capacity: 0,
    Minimum_No_of_Spaces: 0,
    HutName: '',
    Contact_Number: '',
    Description: '',
    Booking_Url: '',
    LIGHTING: '',
    BURNERS: '',
    OVEN: '',
    Location: [0, 0],
    Seasons_Open: ['', ''],
    HEAT: [''],    



    // Gear_Delivery: false,
    WINTER_Water_Snowmelt: false,
    // WINTER_Water_Cistern_non_potable: false,
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
    // REFRIGERATION: false,
    DISHES_POTS_PANS_UTENSILS_CLEANING_SUPPLIES: false,
    GRILL: false,
    GUESTS_MAY_BRING_OWN_GRILL_Restrictions_may_apply: false,
    OUTHOUSE_With_covered_walkway: false,
    OUTHOUSE_No_covered_walkway_walk_a_short_distance: false,
    INDOOR_COMPOSTING_TOILET: false,
    INDOOR_FLUSH_TOILET: false,
    TOILET_PAPER_PROVIDED: false,
    MATTRESSES_PROVIDED: false,
    PILLOWS_PROVIDED: false,
    // SLEEPING_BAGS: false,
    GUESTS_CLEAN_HUT_OR_YURT_BEFORE_DEPARTURE: false,
    GUESTS_CARRY_OUT_THEIR_TRASH_Trashbags_provided: false,
    // SAUNA: false,
    ELECTRICAL_OUTLETS_FOR_GUEST_USE: false,
    // PROPERTY_IS_ADA_COMPLIANT: false,

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