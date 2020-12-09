import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/main.vue'
import Person from '../components/person.vue'
import User from '../components/user.vue'

Vue.use(Router)

export default new Router({
  // 新增base配置 解决项目名称问题
  base: '/MyVue/',
  mode: 'history', // 去掉url中的#
  routes: [
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/person',
      name: 'Person',
      component: Person,
      children: [
        {
          path: 'user',
          name: 'User',
          component: User
        }
      ]
    }
  ]
})