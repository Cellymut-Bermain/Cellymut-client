
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: '/product',component: () => import('pages/Product.vue')},
      { path: '/detail', component: () => import('pages/ProductDetail.vue')},
      { path: '/about', component: () => import('pages/About.vue') },
      { path: '/askme', component: () => import('pages/AskMe.vue') },
      // { path: '/account', component: () => import('pages/Account.vue') },
      { path: '/account', component: () => import('pages/AccountBackup.vue'),
        children: [
          { path: '/account/profile', component: () => import('components/AccountSectionProfile') },
          { path: '/account/order', component: () => import('components/AccountSectionPesanan') },
          { path: '/account/keranjang', component: () => import('components/AccountSectionKeranjang') },
          { path: '/account/setting', component: () => import('components/AccountSettings') },
          { path: '/account/inbox', component: () => import('components/Inbox') }
        ]}
    ]
  },
  { path: '/auth', component: () => import('layouts/Auth.vue')}
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
