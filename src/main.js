// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Dumb Component Imports
import PageTitleComponent from '@/components/PageTitle'
import ButtonAdd from '@/components/ButtonAdd'
import ButtonCancel from '@/components/ButtonCancel'
import ButtonSave from '@/components/ButtonSave'
import ButtonDelete from '@/components/ButtonDelete'
import ButtonEdit from '@/components/ButtonEdit'
import Options from '@/components/Options'
import InputText from '@/components/InputText'

Vue.config.productionTip = false

Vue.component('page-title', PageTitleComponent)
Vue.component('button-add', ButtonAdd)
Vue.component('button-cancel', ButtonCancel)
Vue.component('button-save', ButtonSave)
Vue.component('button-delete', ButtonDelete)
Vue.component('button-edit', ButtonEdit)
Vue.component('options', Options)
Vue.component('input-text', InputText)

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
