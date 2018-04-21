import Vue from 'vue';
import 'normalize.css/normalize.css';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';
import 'element-ui/lib/theme-chalk/index.css';
import '../static/mystyle.css';

Vue.config.productionTip = false;

Vue.use(ElementUI, { locale });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
