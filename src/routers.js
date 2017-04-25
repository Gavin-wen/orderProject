import Login from './components/Login.vue'
import Index from './components/Index.vue'

const routers = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    component: Login
  },
  {
    path: '/index',
    component: Index
  }
]
export default routers

