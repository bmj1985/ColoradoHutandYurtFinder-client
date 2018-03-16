const apiUrl = window.location.hostname === 'localhost'
  ? 'http://localhost:3000/huts'
  : 'https://coloradohutandyurtfinder.herokuapp.com/huts/'

let huts = []

function listHuts () {
  fetch(apiUrl)
    .then(response => response.json())
    .then(response => {
      huts = response.hutsAndYurts
      return huts
    })
}

function createNewHut () {
  fetch(apiUrl, {
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    method: 'POST',
    body: JSON.stringify({
      HutName: this.HutName,
      Elevation: this.Elevation,
      Trailhead_Elevation: this.Trailhead_Elevation,
      Elevation_Gain_From_Trailhead: this.Elevation_Gain_From_Trailhead,
      Location: [this.Location[0], this.Location[1]],
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
      WINTER_Water_Cistern_non_potable: this.WINTER_Water_Cistern_non_potable,
      WINTER_Water_Running_water_potable: this.WINTER_Water_Running_water_potable,
      WINTER_Water_Spring_stream_lake_non_potable: this.WINTER_Water_Spring_stream_lake_non_potable,
      Suggested_SUMMER_Vehicle_Access: this.Suggested_SUMMER_Vehicle_Access,
      SUMMER_Parking_Available_On_site: this.SUMMER_Parking_Available_On_site,
      Summer_Gear_Carts_at_Parking: this.Summer_Gear_Carts_at_Parking,
      SUMMER_Outdoor_Fire_Ring: this.SUMMER_Outdoor_Fire_Ring,
      SUMMER_Water_Cistern_not_potable_on_site: this.SUMMER_Water_Cistern_not_potable_on_site,
      SUMMER_Water_Running_potable_on_site: this.SUMMER_Water_Cistern_not_potable_on_site,
      SUMMER_Water_None_bring_your_own_water: this.SUMMER_Water_None_bring_your_own_water,
      SUMMER_Water_less_than_one_quarter_mi_to_Spring_stream_lake_non_potable: this.SUMMER_Water_less_than_one_quarter_mi_to_Spring_stream_lake_non_potable,
      SUMMER_Water_greater_than_one_quarter_mi_to_Spring_stream_lake_non_potable: this.SUMMER_Water_greater_than_one_quarter_mi_to_Spring_stream_lake_non_potable,
      FOOD_Guests_bring_prepare_their_own: this.FOOD_Guests_bring_prepare_their_own,
      REFRIGERATION: this.REFRIGERATION,
      DISHES_POTS_PANS_UTENSILS_CLEANING_SUPPLIES: this.DISHES_POTS_PANS_UTENSILS_CLEANING_SUPPLIES,
      BURNERS: this.BURNERS,
      OVEN: this.OVEN,
      GRILL: this.GRILL,
      GUESTS_MAY_BRING_OWN_GRILL_Restrictions_may_apply: this.GUESTS_MAY_BRING_OWN_GRILL_Restrictions_may_apply,
      HEAT: this.HEAT,
      OUTHOUSE_With_covered_walkway: this.OUTHOUSE_With_covered_walkway,
      OUTHOUSE_No_covered_walkway_walk_a_short_distance: this.OUTHOUSE_No_covered_walkway_walk_a_short_distance,
      INDOOR_COMPOSTING_TOILET: this.INDOOR_COMPOSTING_TOILET,
      INDOOR_FLUSH_TOILET: this.INDOOR_FLUSH_TOILET,
      TOILET_PAPER_PROVIDED: this.TOILET_PAPER_PROVIDED,
      MATTRESSES_PROVIDED: this.MATTRESSES_PROVIDED,
      PILLOWS_PROVIDED: this.PILLOWS_PROVIDED,
      SLEEPING_BAGS: this.SLEEPING_BAGS,
      GUESTS_CLEAN_HUT_OR_YURT_BEFORE_DEPARTURE: this.GUESTS_CLEAN_HUT_OR_YURT_BEFORE_DEPARTURE,
      GUESTS_CARRY_OUT_THEIR_TRASH_Trashbags_provided: this.GUESTS_CARRY_OUT_THEIR_TRASH_Trashbags_provided,
      LIGHTING: this.LIGHTING,
      SAUNA: this.SAUNA,
      ELECTRICAL_OUTLETS_FOR_GUEST_USE: this.ELECTRICAL_OUTLETS_FOR_GUEST_USE,
      PROPERTY_IS_ADA_COMPLIANT: this.PROPERTY_IS_ADA_COMPLIANT
    })
  })
    .then(response => response.json())
    .then(response => {
      console.log(response)
    })
    .catch(err => console.log('Request failed', err))
}

function editHut (id) {
  fetch(apiUrl + id, {
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    method: 'PUT',
    body: JSON.stringify({
      HutName: this.HutName,
      Elevation: this.Elevation,
      Trailhead_Elevation: this.Trailhead_Elevation,
      Elevation_Gain_From_Trailhead: this.Elevation_Gain_From_Trailhead,
      Location: [this.Location[0], this.Location[1]],
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
      WINTER_Water_Cistern_non_potable: this.WINTER_Water_Cistern_non_potable,
      WINTER_Water_Running_water_potable: this.WINTER_Water_Running_water_potable,
      WINTER_Water_Spring_stream_lake_non_potable: this.WINTER_Water_Spring_stream_lake_non_potable,
      Suggested_SUMMER_Vehicle_Access: this.Suggested_SUMMER_Vehicle_Access,
      SUMMER_Parking_Available_On_site: this.SUMMER_Parking_Available_On_site,
      Summer_Gear_Carts_at_Parking: this.Summer_Gear_Carts_at_Parking,
      SUMMER_Outdoor_Fire_Ring: this.SUMMER_Outdoor_Fire_Ring,
      SUMMER_Water_Cistern_not_potable_on_site: this.SUMMER_Water_Cistern_not_potable_on_site,
      SUMMER_Water_Running_potable_on_site: this.SUMMER_Water_Cistern_not_potable_on_site,
      SUMMER_Water_None_bring_your_own_water: this.SUMMER_Water_None_bring_your_own_water,
      SUMMER_Water_less_than_one_quarter_mi_to_Spring_stream_lake_non_potable: this.SUMMER_Water_less_than_one_quarter_mi_to_Spring_stream_lake_non_potable,
      SUMMER_Water_greater_than_one_quarter_mi_to_Spring_stream_lake_non_potable: this.SUMMER_Water_greater_than_one_quarter_mi_to_Spring_stream_lake_non_potable,
      FOOD_Guests_bring_prepare_their_own: this.FOOD_Guests_bring_prepare_their_own,
      REFRIGERATION: this.REFRIGERATION,
      DISHES_POTS_PANS_UTENSILS_CLEANING_SUPPLIES: this.DISHES_POTS_PANS_UTENSILS_CLEANING_SUPPLIES,
      BURNERS: this.BURNERS,
      OVEN: this.OVEN,
      GRILL: this.GRILL,
      GUESTS_MAY_BRING_OWN_GRILL_Restrictions_may_apply: this.GUESTS_MAY_BRING_OWN_GRILL_Restrictions_may_apply,
      HEAT: this.HEAT,
      OUTHOUSE_With_covered_walkway: this.OUTHOUSE_With_covered_walkway,
      OUTHOUSE_No_covered_walkway_walk_a_short_distance: this.OUTHOUSE_No_covered_walkway_walk_a_short_distance,
      INDOOR_COMPOSTING_TOILET: this.INDOOR_COMPOSTING_TOILET,
      INDOOR_FLUSH_TOILET: this.INDOOR_FLUSH_TOILET,
      TOILET_PAPER_PROVIDED: this.TOILET_PAPER_PROVIDED,
      MATTRESSES_PROVIDED: this.MATTRESSES_PROVIDED,
      PILLOWS_PROVIDED: this.PILLOWS_PROVIDED,
      SLEEPING_BAGS: this.SLEEPING_BAGS,
      GUESTS_CLEAN_HUT_OR_YURT_BEFORE_DEPARTURE: this.GUESTS_CLEAN_HUT_OR_YURT_BEFORE_DEPARTURE,
      GUESTS_CARRY_OUT_THEIR_TRASH_Trashbags_provided: this.GUESTS_CARRY_OUT_THEIR_TRASH_Trashbags_provided,
      LIGHTING: this.LIGHTING,
      SAUNA: this.SAUNA,
      ELECTRICAL_OUTLETS_FOR_GUEST_USE: this.ELECTRICAL_OUTLETS_FOR_GUEST_USE,
      PROPERTY_IS_ADA_COMPLIANT: this.PROPERTY_IS_ADA_COMPLIANT
    })
  })
    .then(response => response.json())
    .then(response => {
      console.log(response)
    })
    .catch(err => console.log('Request failed', err))
}

function deleteHut (id) {
  fetch(apiUrl + id, {
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    method: 'DELETE',
    body: JSON.stringify({
    })
  })
    .then(response => response.json())
    .then(response => {
      console.log(response)
      this.getDataFromDatabase()
    })
    .catch(err => console.log('Request failed', err))
}

export { huts, listHuts, createNewHut, editHut, deleteHut }
