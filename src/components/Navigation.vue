<template>
    <div>
        <v-navigation-drawer
            v-model="drawer"
            app
        >
            <v-list dense>
                <v-list-item v-for="(menu, index) in menuItems" :key="index" router :to="{name:menu.link}" exact>
                        <v-list-item-action>
                            <v-icon v-text="menu.icon"></v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>{{menu.title}}</v-list-item-title>
                        </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar
            app
            color="blue "
            dark
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Medical Report</v-toolbar-title>
            <v-spacer></v-spacer>

            <span class="username">{{userName}}</span>
            <v-menu
              offset-y
            >
                <template v-slot:activator="{ on }">
                    <v-btn text icon v-on="on">
                        <v-icon>mdi-account-circle</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item router :to="{name:'profile-settings'}">
                        <v-list-item-title>Profile</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="signOut">
                        <v-list-item-title>Log out</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
         </v-app-bar>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

    computed: {
      ...mapGetters('users', {
        getUser:'getUser'
      }),
      userName(){
        return this.getUser.username
      }
    },
    data:() => ({
        drawer: null,
        menuItems: [
            {title: 'Dashboard', link:'dashboard', icon: 'mdi-view-dashboard'},
            {title: 'Daftar Pasien', link:'pasients', icon: 'mdi-file-document-box'},
            // {title: 'Pendaftaran Pasien', link:'/pasients/create-pasient', icon: 'mdi-plus'},
            // {title: 'Todo List', link:'/todolist', icon: 'mdi-file-document-box'},
        ]
    }),
    created() {
        console.log(this.userName)
    },
    methods: {
        signOut(){
            this.$store.dispatch('users/signOut', {
                isLogin:false
            }).then(() => {
                this.$router.replace('/')
            })
        }
    },
}
</script>


<style>
  @media (max-width: 424px) {
    .username{
        display:none
    }
  }
</style>