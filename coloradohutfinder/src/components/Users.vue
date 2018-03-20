<template>
<div class="users">
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card  v-for="user in users" :key="user.id">
        <v-toolbar color="teal" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>{{user.user_name}}</v-toolbar-title>
        </v-toolbar>
        <v-list two-line subheader>
          <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{user.email}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-divider></v-divider>
      </v-card>
    </v-flex>
  </v-layout>
  </div>
  </template>
<script>
export default {
	name: 'Users',
	data() {
		return {
			userAPI_Url: window.location.hostname === 'localhost'
				? 'http://localhost:3000/api/v1/users'
				: 'https://coloradohutfinder.herokuapp.com/api/v1/users',
			users: [],
		};
	},
    mounted () {
        this.listUsers()
    },
	methods: {
		listUsers() {
			fetch(this.userAPI_Url)
				.then(response => response.json())
				.then(response => {
                    console.log(response)
					this.users = response.hutsAndYurts
				})
		},
	},
}
</script>
<style scoped>
.users {
margin: 15vh;
list-style: none;
}
</style>

