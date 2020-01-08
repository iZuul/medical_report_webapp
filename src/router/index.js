import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import store from '../store/index'


Vue.use(VueRouter)

const isAuthenticate = (to, from, next) => {
  // console.log(store)
  try {
    if(store.getters['users/getIsLogin'] == false){
      // console.log(store.getters)
      next('/')
    } else {
      //console.log(store.getters)
      next()
    }
    // console.log(store)
  } catch(err) {
    console.log(err)
  }
}

const isNotAuthenticate = (to, from, next) => {
  try {
    if(store.state.users.isLogin === true){
      next({name:'dashboard'})
      console.log('terautentikasi') 
    } else {
      next()
      console.log('tidak terautnetikasi')
    }
  } catch(err) {
    console.log(err)
  }
}


const routes = [
  {
    // will match everything
    path: '*',
    component:() => import('../views/NotFound.vue')
  },
  {
    path:'/',
    name:'base',
    redirect:{
      name:'login'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta:{
      title:'Login - Medical WebApp'
    },
    beforeEnter:isNotAuthenticate,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    beforeEnter:isAuthenticate,
    component: () => import('../views/Dashboard.vue'),
    meta:{
      title:'Dashboard - Medical WebApp'
    }
  },  
  {
    path: '/profile-settings',
    name: 'profile-settings',
    beforeEnter:isAuthenticate,
    component: () => import('../views/user/ProfileSettings.vue'),
    meta:{
      title:'Pengaturan - Medical WebApp'
    }
  },
  {
    path: '/pasients',
    name: 'pasients',
    beforeEnter:isAuthenticate,
    component: () => import('../views/pasients/ListPasients.vue'),
    meta:{
      title:'Pasien - Medical WebApp'
    }
  },
  {
    path: '/pasients/detail-pasient/:id',
    name: 'detail-pasients',
    pros: true,
    beforeEnter:isAuthenticate,
    component: () => import('../views/pasients/RecapsPasient.vue'),
    meta:{
      title:'Detail Pasien - Medical WebApp'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
