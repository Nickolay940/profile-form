<template>
  <v-app>
    <v-card width="400" class="mx-auto mt-5">
      <v-form @submit.prevent="login">
        <v-card-title>
          <h1>Login</h1>
        </v-card-title>
        <v-card-text>
          <v-text-field label="Username" v-model="email" clearable/>
          <v-text-field type="password" label="Password" append-icon="mdi-eye-off" v-model="password" clearable/>
        </v-card-text>
        <v-card-actions>
          <v-btn type="submit" color="success" class="d-flex mx-auto mb-5">Login</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
    <v-alert type="error" class="mt-10" v-if="error">{{error.message}}</v-alert>
  </v-app>
</template>

<script>
import * as firebase from "firebase/app"
import 'firebase/auth'

export default {
  data: () => ({
    email: '',
    password: '',
    error: '',
  }),
  methods: {
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(res => {4
      console.log(res)
      this.$router.push('/profile')
      }).catch(err => this.error = err)
    }
  }
}
</script>
