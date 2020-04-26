
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
            path: 'category/edit/:id',
            name: 'categoryEdit',
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
            path: 'tags/edit/:id',
            name: 'tagsEdit',
            component: () => import('@/pages/content/tags/edit'),
          },
          {
            path: 'tags/add',
            name: 'tagsAdd',
            component: () => import('@/pages/content/tags/edit'),
          },
          {
            path: 'publish',
            name: 'publish',
            component: () => import('@/pages/content/publish/publish'),
          },
          {
            path: 'edit/:id',
            name: 'edit',
            component: () => import('@/pages/content/publish/publish'),
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
        path: '/user',
        name: 'user',
        component: () => import('@/pages/user/user'),
        children: [
          {
            path: 'list',
            name: 'userList',
            component: () => import('@/pages/user/user/list'),
          },
          {
            path: 'create',
            name: 'userCreate',
            component: () => import('@/pages/user/user/edit'),
          },
          {
            path: 'edit/:id',
            name: 'userEdit',
            component: () => import('@/pages/user/user/edit'),
          },
          {
            path: 'password/:id',
            name: 'userEdit',
            component: () => import('@/pages/user/user/password'),
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