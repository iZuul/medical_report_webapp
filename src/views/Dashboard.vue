<template>
  <div>
    <Navigation/> 
    <v-content>
        <v-container>
          <v-row dense>
            <v-col cols="7">
              <v-card
                color="#2196F3"
              >                
                <v-card-title class="headline white--text">
                  <v-progress-circular
                  indeterminate
                  v-if="loadingFetchData"
                  ></v-progress-circular>
                  <span v-else>{{totalPasients}}</span>
                </v-card-title>
                <v-card-subtitle class="white--text">Jumlah Pasien</v-card-subtitle>
                <v-card-actions>
                  <v-btn :to="{name:'pasients'}">Lihat Daftar Pasien</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
    </v-content>
  </div>
</template>


<script>
import Navigation from '../components/Navigation.vue'
import {mapGetters} from 'vuex'

export default {
    components:{
      Navigation,
    },
    computed:{
      ...mapGetters('pasients', {
        getTotalPasients:'getTotalPasients'
      }),
      totalPasients(){
        return this.getTotalPasients;
      }
    },
    data() {
      return {
        loadingFetchData:true
      }
    },
    created(){
      
    },

    mounted() {
      // this.$store.dispatch('pasients/retrieveTotalPasients')
      this.fetchTotalPasient();  
    },
    
    methods: {
      fetchTotalPasient(){
        this.loadingFetchData = true
         let dataUser = JSON.parse(localStorage.getItem('store'))
        this.$store.dispatch('pasients/retrieveTotalPasients', dataUser.users.user.email)
        setTimeout(()=>{
          this.loadingFetchData = false
        }, 4000)
      }
    },
}
</script>