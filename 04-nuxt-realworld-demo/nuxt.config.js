// Nuxt.js配置文件
module.exports = {
  // 自定义路由规则
  router: {
    linkActiveClass: 'active', // 导航链接点击后高亮显示
    extendRoutes(routes, resolve) {
      // 清除Nuxt.js基于pages目录默认生成的路由表规则
      routes.splice(0)
      routes.push(...[
        {
          path: '/',
          component: resolve(__dirname, 'pages/layout'),
          children: [
            {
              path: '',// 默认子路由
              name: 'home',
              component: resolve(__dirname, 'pages/home'),
            },
            {
              path: '/login',// 登录
              name: 'login',
              component: resolve(__dirname, 'pages/login'),
            },
            {
              path: '/register',// 注册
              name: 'register',
              component: resolve(__dirname, 'pages/login'),
            },
            {
              path: '/profile/:username', // 个人页
              name: 'profile',
              component: resolve(__dirname, 'pages/profile'),
            },
            {
              path: '/settings',//设置
              name: 'settings',
              component: resolve(__dirname, 'pages/settings')
            },
            {
              path: '/editor', // 编辑器
              name: 'editor',
              component: resolve(__dirname, 'pages/editor'),
            },
            {
              path: '/article/:slug', // 文章页
              name: 'article',
              component: resolve(__dirname, 'pages/article'),
            }
          ]
        }
      ])
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3001
  },
  // 注册插件
  plugins: [
    '~/plugins/request.js',
    '~/plugins/dayjs.js'
  ]
}