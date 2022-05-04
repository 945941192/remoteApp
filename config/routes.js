export default [
  // {
  //   path: '/user',
  //   layout: false,
  //   routes: [
  //     {
  //       name: 'login',
  //       path: '/user/login',
  //       component: './user/Login',
  //     },
  //     {
  //       component: './404',
  //     },
  //   ],
  // },
  {
    path: '/home',
    name: '页面1',
    icon: 'smile',
    component: './Home',
  },
  {
    path: '/product',
    name: '页面2',
    icon: 'crown',
    component: './Product',
  },
  {
    path: '/list',
    name: '页面3',
    icon: 'crown',
    routes: [
      {
        path: '/list/home',
        name: '页面组建1',
        component: './List/ListName',
      },
      {
        path: '/list/product',
        name: '页面组建2',
        component: './Product',
      },
    ],
  },

  {
    path: '/',
    redirect: '/home',
  },
  {
    component: './404',
  },
];
