<template>
  <div id="app">
    <v-app id="inspire">
      <v-container fluid>
        <v-row justify="center">
          <v-expansion-panels popout>
            <v-expansion-panel
              v-for="(message, i) in messages"
              :key="i"
              hide-actions
            >
              <v-expansion-panel-header>
                <v-row align="center" class="spacer" no-gutters>
                  <v-col cols="4" sm="2" md="1">
                    <v-avatar size="36px">
                      <img
                        v-if="message.avatar"
                        alt="Avatar"
                        src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                      />
                    </v-avatar>
                  </v-col>

                  <v-col class="hidden-xs-only" sm="5" md="3">
                    <strong v-html="message.name"></strong>
                  </v-col>

                  <v-col class="text-no-wrap" cols="5" sm="3">
                    <strong v-html="message.title"></strong>
                  </v-col>

                </v-row>
              </v-expansion-panel-header>

              <v-expansion-panel-content>
                <v-divider></v-divider>
                <v-card-text v-text="lorem"></v-card-text>
                <v-btn @click="logout" color="red">LogOut</v-btn>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'

export default {
  data: () => ({
    messages: [
      {
        avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
        name: "John Smith",
        title: "Some title!",
        excerpt: "Thank you for joining our community..."
      }
    ],
    lorem:
      "Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum."
  }),
  methods: {
    logout() {
      firebase.auth().signOut().then(() => {this.$router.push('/')})
    }
  },
  created() {
    let user = firebase.auth().currentUser;
    if (!user) {
      this.$router.push('/')
    }
  }
};
</script>
