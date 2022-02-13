//import home from 'home.js'

const routes = [
    {path:'/home', component:home},
    {path:'/department', component:department},    
    {path:'/employee', component:employee},
    
]
//Vue.use(VueRouter)
const router = new VueRouter({
   routes
}
)

const app = new Vue({
  router
}).$mount('#app')