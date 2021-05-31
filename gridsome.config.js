// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [],
  templates: {
    User: [
      {
        path: '/users/:id',
        component: './src/templates/User.vue'
      }
    ],
    BlogList:[
      {
        path:'/details/:id',
        component: './src/templates/Details.vue'
      }
    ]
  }
}
