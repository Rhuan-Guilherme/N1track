import { createRouter, createWebHashHistory } from 'vue-router'
import loginView from '../views/LoginView.vue'
import { useLoginStore } from '@/stores/login'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: loginView,
      beforeEnter: (to, from, next) =>{
        const store = useLoginStore()
        if (!store.autenticado) {
          next();
        } else {
          next('/tickets'); 
        }
      }
    },
    {
      path: '/tickets',
      name: 'tickets',
      component: () => import('../views/TicketsView.vue'),
      beforeEnter: (to, from, next) =>{
        const store = useLoginStore()
        if (store.autenticado && store.dadosUsuario.cargo === 'n1') {
          next();
        } else {
          next('/chamados'); 
        }
      }
    },
    {
      path: '/chamados',
      name: 'chamados',
      component: () => import('../views/ChamadosView.vue'),
      beforeEnter: (to, from, next) =>{
        const store = useLoginStore()
        if (store.autenticado) {
          next();
        } else {
          next('/'); 
        }
      }
    },
    {
      path: '/desempenho',
      name: 'desempenho',
      component: () => import('../views/DesempenhoView.vue'),
      beforeEnter: (to, from, next) =>{
        const store = useLoginStore()
        if (store.autenticado && store.dadosUsuario.cargo === 'n1') {
          next();
        } else {
          next('/'); 
        }
      }
    },
    {
      path: '/organograma',
      name: 'organograma',
      component: () => import('../views/OrganogramaView.vue'),
      beforeEnter: (to, from, next) =>{
        const store = useLoginStore()
        if (store.autenticado && store.dadosUsuario.cargo === 'n1') {
          next();
        } else {
          next('/'); 
        }
      }
    },
    {
      path: '/vips',
      name: 'vips',
      component: () => import('../views/CadastroVips.vue'),
      beforeEnter: (to, from, next) =>{
        const store = useLoginStore()
        if (store.autenticado && store.dadosUsuario.cargo === 'n1') {
          next();
        } else {
          next('/'); 
        }
      }
    }
  ]
})

export default router
