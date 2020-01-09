<template>
  <v-content>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-row 
            align="center"
            justify="center"
            class="center-page"
          >
            <v-card
              tile
            >
            <v-card-title class="div-center">Form Registrasi</v-card-title>
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
              >
                <v-text-field
                  class="px-10"
                  v-model="email"
                  label="E-mail"
                  required
                ></v-text-field>

                <v-text-field
                  class="px-10"
                  v-model="password"
                  :append-icon="password_show ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="password_show ? 'text' : 'password'"
                  name="password"
                  label="Kata Sandi"
                  hint="At least 8 characters"
                  counter
                  @click:append="password_show = !password_show"
                ></v-text-field>

                <v-text-field
                  class="px-10"
                  v-model="confirm_password"
                  :append-icon="confirm_password_show ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="confirm_password_show ? 'text' : 'password'"
                  :rules="[comparePassword]"
                  name="confirmPassword"
                  label="Konfirmasi Kata Sandi"
                  hint="At least 4 characters"
                  counter
                  @click:append="confirm_password_show = !confirm_password_show"
                ></v-text-field>
                                
                <v-row justify="center" align="center">
                  <v-col cols="12" class="text-center px-10">
                    <v-btn rounded block color="primary" @click="onSignUp">Daftar</v-btn>
                  </v-col>                
                  <v-col cols="12" class="text-center">
                    Sudah punya akun?
                    <v-btn text color="blue" :to="{name:'login'}">Masuk</v-btn>
                  </v-col>
                  <v-col cols="12" class="text-center">
                    <v-btn to="/">Menuju Dashboard</v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import { mapGetters } from 'vuex'


export default {
    data:() => ({
        valid:"",
        email:"",
        password:"",
        confirm_password:"",
        password_show: false,
        confirm_password_show: false,
        show2: true,
        show3: false,
        show4: false,
        rules: {
          required: value => !!value || 'Perlu diisi.',
          min: v => v.length >= 4 || 'Minimial 4 Karakter',
        },
    }),

    computed:{
      ...mapGetters('users', {
        getUser:'getUser'
      }),
      comparePassword(){
        return this.password === this.confirm_password? '' : 'Password tidak cocok'
      },
      user(){
        return this.getUser
      }
    },

    watch:{
      user(value) {
        if (value !== null && value !== undefined ){
          this.$router.push('/')
        }
      }
    },

    methods:{
      onSignUp(){
        if(this.password == this.confirm_password){
          this.$store.dispatch('users/signUpUser', {
            email:this.email,
            password:this.password
          })
        }
      }
    }
}
</script>

<style>
    .center-page {
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .div-center {
        justify-content: center;
    }
</style>
