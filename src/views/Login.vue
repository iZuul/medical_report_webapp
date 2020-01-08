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
            <v-card-title class="div-center">Login</v-card-title>
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
              >
                <v-text-field
                    class="px-10"
                    v-model="email"
                    type="email"              
                    label="E-mail"
                    required
                ></v-text-field>

                <v-text-field
                    class="px-10"
                    v-model="password"
                    :append-icon="password_show ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="password_show ? 'text' : 'password'"
                    name="katasandi"
                    label="Katasandi"
                    hint="Minimal 6 karakter"
                    counter
                    @click:append="password_show = !password_show"
                    @keyup.enter="onSignIn"
                ></v-text-field>
                                
                <v-row justify="center" align="center">
                    <v-col cols="12" class="text-center px-10">
                      <v-btn rounded block color="primary" @click="onSignIn">Masuk</v-btn>
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
  name:'login',
  data() {
      return {
          valid:"",
          email:"",
          password:"",
          password_show:false,
          rules: {
            required: value => !!value || 'Perlu diisi.',
            min: v => v.length >= 6 || 'Minimal 6 karakter',
            emailMatch: () => ('The email and password you entered don\'t match'),
          },
      }
  },

  computed: {
    ...mapGetters('users', {
      getUser:'getUser'
    }),
    user(){
      return this.getUser
    }
  },

  watch:{
    user(value) {
      if (value !== null && value !== undefined ){
        this.$router.push('/dashboard')
      }
    }
  },

   methods: {
     onSignIn(){
       this.$store.dispatch('users/signInUser', {
         email:this.email,
         password:this.password
       })
     }
   }, 
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
