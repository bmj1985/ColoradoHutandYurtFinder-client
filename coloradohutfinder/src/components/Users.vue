<template>
<div class="users">
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card  v-for="user in users" :key="user.id">
        <v-toolbar color="teal" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>{{user.user_name.split("").slice(0,10).join("")}}</v-toolbar-title>
        </v-toolbar>
        <v-list two-line subheader>
          <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{user.email.split("").slice(0,10).join("")}}</v-list-tile-title>
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
import hash from 'hash.js'
export default {
	name: 'Users',
	data() {
		return {
			userAPI_Url: window.location.hostname === 'localhost'
				? 'http://localhost:3000/api/v1/users'
				: 'https://coloradohutfinder.herokuapp.com/api/v1/users/',
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
          this.users = response.hutsAndYurts.map(user => {
            return { id: user.id,
                    user_name: hash.sha512().update(user.user_name).digest('hex'),
                    email: hash.sha512().update(user.email).digest('hex'),
                    password: hash.sha512().update(user.password).digest('hex'),
                    password_hash_algorithm: hash.sha256().update(user.password_hash_algorithm).digest('hex'),
                    password_salt: hash.sha512().update(user.password_salt).digest('hex'),
                    }
          })
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

