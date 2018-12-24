
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/Home.vue') },
      { path: '/product', name: 'product', component: () => import('pages/Product.vue')},
      { path: '/detail/:id', name: 'detail',component: () => import('pages/ProductDetail')},
      { path: '/about', name: 'about', component: () => import('pages/About.vue') },
      { path: '/askme', name: 'askme', component: () => import('pages/AskMe.vue') },
      // { path: '/account', component: () => import('pages/Account.vue') },
      { path: '/auth', name: 'auth', component: () => import('pages/Auth.vue')},
      { path: '/account', name: 'account', component: () => import('pages/AccountBackup.vue'),
        children: [
          // { path: '/account/profile', name: 'account-profile', component: () => import('components/AccountSectionProfile') },
          { path: '/account/order', name: 'account-order', component: () => import('components/AccountSectionPesanan') },
          { path: '/account/keranjang', name: 'account-keranjang', component: () => import('components/AccountSectionKeranjang') },
          { path: '/account/setting', name: 'account-setting', component: () => import('components/AccountSettings') },
          { path: '/account/inbox', name:'Updates', component: () => import('components/Inbox') }
        ]}
    ]
  },
  // { path: '/auth', component: () => import('layouts/Auth.vue')}
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
