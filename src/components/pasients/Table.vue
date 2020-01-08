<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Cari Pasien"
        single-line
        hide-details
      >
      </v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="this.list_pasients"
      :single-expand="singleExpand"
      :search="search"
      show-select
      item-key="id"
      v-model="selected"
      :loading="loading"
      loading-text="Menunggu data pasien......."
      class="elevation-1"
    >
      <template v-slot:top>
        <v-dialog v-model="dialogEdit" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="headline">Edit</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="8">
                    <v-text-field v-model="editedItem.name" label="Nama" @keyup.enter="saveEdit"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.age" label="Umur" @keyup.enter="saveEdit"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="12">
                    <v-text-field v-model="editedItem.address" label="Alamat" @keyup.enter="saveEdit"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="saveEdit">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">Konfirmasi</v-card-title>

            <v-card-text>
              Yakin menghapus Pasien {{data_pasient.name}} 
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="close">Batal</v-btn>

              <v-btn color="red darken-1" text @click="deleteItem(data_pasient.id)">Hapus</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>

      <template v-slot:item.action="{ item }">
        <v-btn :to="{path:'/pasients/detail-pasient/' + item.id}" small color="primary" class="btn-action">Lihat</v-btn>
        <v-btn @click="editPasient(item)" small color="info" class="btn-action">Ubah</v-btn>
        <v-btn @click="deletePasient(item)" small color="error" class="btn-action">Hapus</v-btn>
      </template>

      <template v-slot:footer>
        <div class="text-end pa-5">
          <!-- Delete All Dialog -->
          <v-dialog :disabled="selected.length == 0" v-model="dialogDeleteSelected" width="500">
            <template v-slot:activator="{ on }">
              <v-btn
                color="red lighten-2"
                dark
                v-on="on"
                :disabled="selected.length == 0" 
              >
                Hapus Data Terpilih
              </v-btn>
            </template>

            <v-card>
              <v-card-text
                class="headline grey lighten-2"
              >
                Anda yakin ingin menghapus data terpilih?
              </v-card-text>
              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  text
                  @click="deletePasientSelected"
                >
                  Ya
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <!-- Add Button Pasient -->
          <v-dialog v-model="dialogAdd" persistent max-width="600px">
            <template v-slot:activator="{ on }">
              <v-btn
                color="pink"
                dark
                fixed
                bottom
                right
                fab
                title="Tambah Pasien"
                v-on="on"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">Pasien Baru</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field label="Nama" v-model="data_pasient.name" @keyup.enter="addPasient" required></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field label="Umur" type="number" v-model="data_pasient.age" @keyup.enter="addPasient" required></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-textarea
                        name="alamat"
                        label="Alamat"
                        v-model="data_pasient.address"
                        @keyup.enter="addPasient"
                      ></v-textarea>
                    </v-col>
                    <!-- <v-col cols="12" sm="6">
                      <v-autocomplete
                        :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                        label="Interests"
                        multiple
                      ></v-autocomplete>
                    </v-col> -->
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" text @click="dialogAdd = false">Batal</v-btn>
                <v-btn color="success" @click="addPasient">Simpan</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </template>

    </v-data-table>
  </v-card>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    computed:{
      ...mapGetters('pasients', {
        pasients:'pasients'
      }),
      list_pasients: function() {
        return this.pasients;
      },
    },

    data:() => ({
        dialogEdit: false,
        dialogDelete: false,
        dialogDeleteSelected: false,
        dialogAdd:false,
        loading:true,
        search:'',
        selected: [],
        expanded: [],
        singleExpand: true,
        editedItem: {
          id:'',
          name: '',
          age: '',
        },
        headers: [
          { text: 'Nama Pasien', align: 'left', value: 'name', sortable: true },
          { text: 'Umur', value: 'age', sortable: true, },
          { text: 'Alamat', value: 'address', sortable: false,},
          { text: 'Terakhir Periksa', value: 'latest_checkup', sortable: true,},
          { text: 'Pukul', value: 'latest_checkup_time', sortable: true,},
          { text: 'Action', value: 'action', sortable: false,}
        ],
        data_pasient:{
          id:'',
          name:'',
          age:'',
          address:''
        }
    }),

    created(){
    },

    mounted() {
      this.fetchListPasients()
    },

    methods: {
      setAll(obj, val) {
        Object.keys(obj).forEach(index => {
            obj[index] = val
        });
      },

      fetchListPasients(){
        let dataUser = JSON.parse(localStorage.getItem('store'))
        //console.log(dataUser.users.user.email)
        this.laoding = true;
        this.$store.dispatch('pasients/retrievePasients', dataUser.users.user.email)
        setTimeout(()=>{
          this.loading = false;
        }, 3000)
      },

      addPasient(){
        this.$store.dispatch('pasients/addPasient',{
          name:this.data_pasient.name.trim(),
          age:this.data_pasient.age.trim(),
          address:this.data_pasient.address.trim(),
        })
        this.setAll(this.data_pasient, null)
        this.dialogAdd = false
        this.$emit('activate_alert')
        this.$emit('activate_save', true)
        this.$emit('activate_delete', false)
        this.fetchListPasients()
      },

      editPasient (item) {
        // this.editedIndex = this.$store.state.pasients.pasients.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogEdit = true
      },

      deletePasient (pasient) {
        // this.$store.dispatch('pasients/deletePasient', id, {root:true})
        this.dialogDelete = true
        // console.log(pasient)
        this.data_pasient = Object.assign({}, pasient)
      },

      deleteItem(id_pasient){
        let index = this.list_pasients.findIndex(item => item.id === id_pasient)
        console.log(index, id_pasient)
        this.$store.dispatch('pasients/deletePasient', {
          index:index,
          id_pasient:id_pasient
        })
        this.dialogDelete = false
        this.$emit('activate_alert')
        this.$emit('activate_delete', true)
        this.$emit('activate_save', false)
      },

      deletePasientSelected () {
        // for(var i = 0; i <this.selected.length; i++){
        //     const index = this.$store.state.pasients.indexOf(this.selected[i]);
        //     this.$store.state.pasients.splice(index, index+1);
        // }
        // this.selected.length = 0;
        // this.dialogDeleteAll = false
        let id_selects = []
        this.selected.find(item => {
          id_selects.push(item.id)
        })
        
        this.$store.dispatch('pasients/deleteSelected', {
          id_selects:id_selects,
          length:id_selects.length
        })
        console.log(id_selects.length)
        this.dialogDeleteSelected = false
      },
      
      close () {
        if(this.dialogEdit == true){
          this.dialogEdit = false
        } else if (this.dialogDelete == true) {
          this.dialogDelete = false
        } else {
          return 0
        }
        // setTimeout(() => {
        //   this.editedItem = Object.assign({}, this.defaultItem)
        //   this.editedIndex = -1
        // }, 300)
      },

      saveEdit () {
        // if (this.editedIndex > -1) {
        //   Object.assign(this.$store.state.pasients.pasients[this.editedIndex], this.editedItem)
        // } else {
        //   this.$store.state.pasients.pasients.push(this.editedItem)
        // }
        this.$store.dispatch('pasients/updatePasient', {
          id_pasient: this.editedItem.id,
          name:this.editedItem.name,
          age:this.editedItem.age,
          address:this.editedItem.address
        })
        // this.fetchListPasients()
        this.close()
      },
    },
}
</script>

<style>
  .btn-action{
    margin: 5px 5px

  }
</style>