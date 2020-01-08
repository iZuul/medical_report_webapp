<template>
    <div>
        <Navigation/> 
        <v-content>
            <v-container>
                <v-row>
                    <v-col cols="5">
                        <v-card>
                            <div>
                                <v-card-title class="headline" v-text="title"></v-card-title>
                                <!-- <v-avatar class="ma-3" size="125" tile>
                                    <v-img></v-img>
                                </v-avatar> -->
                                <v-card-text>
                                    <v-subheader>Nama Pengguna</v-subheader>
                                    <div class="profile-item">
                                        <div class="profile-item-input">
                                            <v-input v-cloak append-icon="mdi-pencil" @click:append="editName" v-if="editedName">{{user.username}}</v-input>
                                            <v-text-field v-else v-model="newUsername"  ref="p_name"></v-text-field>
                                        </div>                                       
                                    </div>

                                    <v-divider></v-divider>

                                    <v-subheader>Email</v-subheader>
                                    <div class="profile-item">
                                        <div class="profile-item-input">
                                            <v-input>{{user.email}}</v-input>
                                        </div>                                       
                                    </div>

                                    <!-- <input type="timestamp" v-model="date" @blur="getdate"> -->
                                    <v-divider></v-divider>

                                    <v-subheader>Pasien</v-subheader>
                                    <div class="profile-item">
                                        <div class="profile-item-input">
                                            <v-progress-circular
                                                indeterminate
                                                v-if="loadingFetchData"
                                            ></v-progress-circular>
                                            <v-input v-else>{{totalPasients}}</v-input>
                                        </div>                                       
                                    </div>
                                </v-card-text>
                            </div>

                            <v-card-actions v-if="!editedName">
                                <v-spacer></v-spacer>
                                <v-btn color="warning darken-5" @click="cancelEdit">Batal</v-btn>
                                <v-btn color="success" @click="saveEdit">Simpan</v-btn>
                            </v-card-actions>
                            
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </div>
</template>

<script>
import Navigation from '../../components/Navigation.vue'
import { mapGetters } from 'vuex'

export default {
    components:{
        Navigation
    },

    computed:{
        ...mapGetters('users',{
            getUser:'getUser'
        }),
        ...mapGetters('pasients', {
            getTotalPasients:'getTotalPasients'
        }),
        user(){
            return this.getUser
        },
        totalPasients(){
            return this.getTotalPasients
        }
    },
    data() {
        return {
            editedName:true,
            loadingFetchData:true,
            title:'Profile',
            newUsername:'',
            date:''
        }
    },

    mounted() {
        console.log(this.user , this.totalPasients)
        this.fetchTotalPasient()
    },
    methods: {
        fetchTotalPasient(){
            this.loadingFetchData = true
            let dataUser = JSON.parse(localStorage.getItem('store'))
            this.$store.dispatch('pasients/retrieveTotalPasients', dataUser.users.user.email)
            setTimeout(()=>{
                this.loadingFetchData = false
            }, 4000)
        },
        editName(){
            this.newUsername = this.user.username
            this.editedName = false
        },
        saveEdit(){
            this.$store.dispatch('users/editUser', {
                id:this.user.id,
                username:this.newUsername,
                email:this.user.email
            })
            this.editedName = true
        },
        cancelEdit(){
            this.$refs.p_name.initialValue
            this.editedName = true
        },
        getdate(){
            console.log(this.date)
        }
    },
}
</script>

<style scoped>
  .profile-item{
      padding: 0 16px
  }

  .profile-item-input{
     
  }
</style>