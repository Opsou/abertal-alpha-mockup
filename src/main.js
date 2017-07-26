// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/bootstrap-theme.less'
import './assets/styles.less'
import Person from '@/components/Person'
import MembershipTeaser from '@/components/MembershipTeaser'
import MembershipSelect from '@/components/MembershipSelect'

Vue.use(BootstrapVue)
Vue.component('person', Person)
Vue.component('membership-select', MembershipSelect)
Vue.component('membership-teaser', MembershipTeaser)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
