<template>
  <div>
    <Navigation/> 
    <v-content>
        <v-container>
          <v-alert type="success" v-model="alert_visible" transition="slide-y-transition">
            Sukses ! data berhasil <strong><span v-if="alert_save">disimpan</span> <span v-if="alert_delete">dihapus</span></strong>.
          </v-alert>
          <v-row>
            <v-col cols="12">
              <h1 class="title">Daftar Pasien</h1>
              <TablePasients v-on:activate_alert="alertVisible" v-on:activate_save="alertSave" v-on:activate_delete="alertDelete"/>
            </v-col>
          </v-row>
        </v-container>
    </v-content>
  </div>
</template>

<script>
import Navigation from '../../components/Navigation.vue'
import TablePasients from '../../components/pasients/Table.vue'

export default {
    components:{
        Navigation, TablePasients
    },
    created(){
      // this.$store.dispatch('pasients/retrievePasients')
    },
    data() {
      return {
        alert_visible:false,
        alert_save:false,
        alert_delete:false
      }
    },
    methods: {
      alertVisible(){
        this.alert_visible = true
        setTimeout(()=> {
          this.alert_visible = false
        }, 5000)
      },
      alertSave(condition){
        this.alert_save = condition
        this.alert_delete = !condition
      },
      alertDelete(condition){
        this.alert_delete = condition
        this.alert_save = !condition
      }
    },
}
</script>