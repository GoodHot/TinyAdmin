
export const routerMap = [
  {
    path: '/auth',
    name: 'auth',
    component: () => import('@/layouts/AuthLayout'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/pages/auth/login'),
      }
    ]
  },
  {
    path: '/',
    name: 'index',
    component: () => import('@/layouts/BaseLayout'),
    redirect: '/content/article',
    children: [
      {
        path: '/content',
        name: 'content',
        component: () => import('@/pages/content/content'),
        children: [
          {
            path: 'article',
            name: 'article',
            component: () => import('@/pages/content/article/list'),
          },
          {
            path: 'category',
            name: 'category',
            component: () => import('@/pages/content/category/list'),
          },
          {
            path: 'category/add',
            name: 'categoryAdd',
            component: () => import('@/pages/content/category/edit'),
          },
          {
            path: 'category/sort',
            name: 'categorySort',
            component: () => import('@/pages/content/category/sort'),
          },
          {
            path: 'tags',
            name: 'tags',
            component: () => import('@/pages/content/tags/list'),
          },
          {
            path: 'publish',
            name: 'publish',
            component: () => import('@/pages/content/publish'),
          }
        ]
      },
      {
        path: '/config',
        name: 'config',
        component: () => import('@/pages/config/config'),
        children: [
          {
            path: 'skin',
            name: 'skin',
            component: () => import('@/pages/config/skin/list'),
          },
          {
            path: 'system',
            name: 'system',
            component: () => import('@/pages/config/system/system'),
          }
        ]
      },
      {
        path: '/personal',
        name: 'personal',
        component: () => import('@/pages/personal/personal')
      }
    ]
  }
]