<template>
  <div>
    <Navigation/> 
    <v-content>
        <v-container>
          <v-row>
            <v-fab-transition>
              <v-btn
                color="white"
                dark
                fixed
                right
                title="Kembali"
                @click="$router.go(-1)" 
                style="color:black"
              >
                <v-icon>mdi-arrow-left</v-icon>
              </v-btn>  
            </v-fab-transition>
            <v-col cols="12">
              <h1 class="title" v-cloak>Nama Pasien : {{getPasientName}}</h1>
              <TableRecap />
            </v-col>
          </v-row>
        </v-container>
    </v-content>
  </div>
</template>

<script>
import Navigation from '../../components/Navigation.vue'
import TableRecap from '../../components/pasients/MedicalData.vue'
import { mapGetters } from 'vuex'

export default {
    components:{
        Navigation,
        TableRecap
    },
    computed:{
      ...mapGetters('pasients', {
        pasientByID:'getPasientByID'
      }),
      getPasientName(){
        return this.pasientByID.name
      }
    },

    mounted(){
    },

    beforeMount(){
      // this.$store.dispatch('pasients/retrievePasients')
      this.$store.dispatch('pasients/retrievePasientByID', this.$route.params.id)
    },

    beforeDestroy(){
      this.$store.dispatch('recaps/emptyCacheRecaps')
    },

    methods: {
    },
}
</script>