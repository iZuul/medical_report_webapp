<template>
  <v-card>
    <v-card-title>
        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Cari Rekap"
        >
        </v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :loading="loading"
      :items="this.recaps"
      :search="search"
      item-key="id"
      loading-text="Menunggu data pasien......."
      v-cloak
    >
      <template v-slot:top>
        <v-dialog v-model="dialog_edit_recap" max-width="400px">
          <v-card>
            <v-card-title>
              <span class="headline">Edit Recap</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                      <v-textarea name="diagnosa" label="Diagnosa" v-model="edited_recap.diagnosa"></v-textarea>
                    </v-col>
                    <v-col>
                      <v-label style="font-size:16px">Therapy</v-label>
                      <div v-for="(i, index) in edited_recap.therapy" :key="index">
                        <div class="v-input theme--light v-text-field v-text-field--single-line v-text-field--solo v-text-field--is-booted v-text-field--enclosed">
                            <div class="v-input__control">
                                <div class="v-input__slot">
                                    <div class="v-text-field__slot">
                                        <input type="text" v-model="i.type">
                                    </div>
                                    <div class="v-input__append-inner">
                                        <i @click="newEditTherapy" role="button" class="v-icon notranslate v-icon--link mdi mdi-plus theme--light green--text"></i>
                                        <i @click="deleteEditTherapy" role="button" class="v-icon notranslate v-icon--link mdi mdi-minus theme--light red--text"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
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

        <v-dialog v-model="dialog_delete_recap" max-width="400px">
          <v-card>
            <v-card-title class="headline">Konfirmasi</v-card-title>

            <v-card-text>
              Yakin menghapus rekap {{data_recap.date_checkup}} pukul {{data_recap.time_checkup}}? 
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="close">Batal</v-btn>

              <v-btn color="red darken-1" text @click="deleteItem(data_recap.id)">Hapus</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>

      <template v-slot:item.therapy={item}>
          <v-list-item>
              <v-list-item-content>
                  <v-list-item-title v-for="list in item.therapy" :key="list.id">
                      <div>- {{list.type}}</div>
                  </v-list-item-title>
              </v-list-item-content>
          </v-list-item>
      </template>

      <template v-slot:item.actions={item}>
        <v-btn @click="editRecap(item)" small color="info" class="btn-action">Ubah</v-btn>
        <v-btn @click="deleteRecap(item)" small color="error" class="btn-action">Hapus</v-btn>
      </template>

      <template v-slot:footer>
          <v-dialog v-model="dialog_add" persistent max-width="600px">
            <template v-slot:activator="{ on }">
              <v-btn color="pink" dark fixed bottom right fab title="Tambah Rekap" v-on="on">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">Rekap Baru</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-textarea name="diagnosa" label="Diagnosa" v-model="data_recap.diagnosa" @keyup.enter="addPasient"></v-textarea>
                    </v-col>
                    <v-col>
                      <v-label style="font-size:16px">Therapy</v-label>
                      <div v-for="(item, index) in data_recap.therapy" :key="index">
                        <div class="v-input theme--light v-text-field v-text-field--single-line v-text-field--solo v-text-field--is-booted v-text-field--enclosed">
                            <div class="v-input__control">
                                <div class="v-input__slot">
                                    <div class="v-text-field__slot">
                                        <input type="text" v-model="item.type">
                                    </div>
                                    <div class="v-input__append-inner">
                                        <i @click="newTherapy" role="button" class="v-icon notranslate v-icon--link mdi mdi-plus theme--light green--text"></i>
                                        <i @click="deleteTherapy" role="button" class="v-icon notranslate v-icon--link mdi mdi-minus theme--light red--text"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
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
                <v-btn color="error" text @click="dialog_add = false">Batal</v-btn>
                <v-btn color="success" @click="addRecap">Simpan</v-btn>
              </v-card-actions>
            </v-card>
        </v-dialog>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed:{
      ...mapGetters('recaps', {
         getRecapsPasient:'getRecapsPasient'
      }),
      recaps: function() {
        return this.getRecapsPasient;
      },
    },

    data() {
        return {
            dialog_add:false,
            dialog_edit_recap:false,
            dialog_delete_recap:false,
            search:'',
            loading:true,
            form_title:"Tambah Rekap",
            data_recap:{
              diagnosa:'',
              therapy:[
                  { type:''}
              ],
            },
            headers:[
              { text: 'Tanggal Periksa', align: 'left', value: 'date_checkup', sortable: true, },
              { text: 'Pukul', value: 'time_checkup', sortable: true, },
              { text: 'Diagnosa', value: 'diagnosa', sortable: false,},
              { text: 'Terapi', value: 'therapy', sortable: false,},
              { text: 'Aksi', value: 'actions', sortable: false,}
            ],
            detil:[
              {date_checkup:2019, diagnosa:'ketiduran', therapy:'olahraga'},
              {date_checkup:2019, diagnosa:'ketiduran', therapy:'olahraga'},
              {date_checkup:2019, diagnosa:'ketiduran', therapy:'olahraga'}
            ],
            edited_recap: {},
        }
    },

    created() {
    },

    mounted() {
        this.fetchRecapsPasient() 
    },

    destroyed() {
        this.$store.dispatch('recaps/emptyCacheRecaps')
    },
    methods: {
        fetchRecapsPasient(){
          let dataUser = JSON.parse(localStorage.getItem('store'))
          this.loading = true,
          this.$store.dispatch('recaps/retrieveRecapsPasient',  this.$route.params.id)
          setTimeout(() => {
              this.loading = false
          }, 3000)
        },

        newTherapy(){
          this.data_recap.therapy.push({
              type:''
          })
          console.log('new clicked')
        },

        deleteTherapy(index){
          this.data_recap.therapy.splice(index, 1);
          console.log('delet clicked')
        },

        newEditTherapy(){
          this.edited_recap.therapy.push({
              type:''
          })
          console.log('new clicked')
        },

        deleteEditTherapy(index){
          this.edited_recap.therapy.splice(index, 1);
          console.log('delet clicked')
        },

        addRecap(){
          //console.log(this.data_recap.diagnosa)
          this.$store.dispatch('recaps/addRecap', {
              id_pasient: this.$route.params.id,
              recap:{
                  diagnosa:this.data_recap.diagnosa.trim(),
                  therapy:this.data_recap.therapy,
              }
          })
          this.dialog_add = false
          this.fetchRecapsPasient()
        },

        editRecap(item){
          this.edited_recap = Object.assign({}, item)
          this.dialog_edit_recap = true
          console.log(this.edited_recap)
        },
        
        close(){
          this.dialog_edit_recap = false,
          this.dialog_delete_recap = false
        },

        saveEdit(){
          this.$store.dispatch('recaps/updateRecap', {
            id_pasient: this.$route.params.id,
            id_recap: this.edited_recap.id,
            diagnosa:this.edited_recap.diagnosa,
            therapy:this.edited_recap.therapy
          })
          // this.fetchRecapsPasient()
          this.dialog_edit_recap = false
        },

        deleteRecap(recap){
          this.dialog_delete_recap = true
          this.data_recap = Object.assign({}, recap)
          console.log(recap)
        },

        deleteItem(id_recap){
          let index = this.recaps.findIndex(item => item.id === id_recap)
          console.log(index, id_recap)
          this.$store.dispatch('recaps/deleteRecap', {
            id_pasient:this.$route.params.id,
            index:index,
            id_recap:id_recap
          })
          this.dialog_delete_recap = false
        }


    },

}
</script>

<style>
  .btn-action{
    margin: 0 5px
  }
</style>