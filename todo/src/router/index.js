import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Devtools from '@/components/content/devtools'
import NPM from '@/components/content/npm'
import CMD from '@/components/content/cmd'
import Deversion from '@/components/content/deversion'
import AMD from '@/components/content/amd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/devtools',
      name: 'Devtools',
      component: Devtools
    },
    {
      path: '/npm',
      name: 'NPM',
      component: NPM
    },
    {
      path: '/cmd',
      name: 'CMD',
      component: CMD
    },
    {
      path: '/deversion',
      name: 'Deversion',
      component: Deversion
    },
    {
      path: '/amd',
      name: 'AMD',
      component: AMD
    }
  ]
})
