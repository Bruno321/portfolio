
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'bolsa-uaq', component: () => import('pages/BolsaUaq.vue') },
      { path: 'indereq', component: () => import('pages/Indereq.vue') },
      { path: 'cosecha-colectiva', component: () => import('pages/CosechaColectiva.vue') },
      { path: 'agenda', component: () => import('pages/AgendaUaq.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
