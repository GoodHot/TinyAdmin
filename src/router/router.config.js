
export const routerMap = [
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
      }
    ]
  }
]