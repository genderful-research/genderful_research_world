import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import marked from 'marked'

const markedMixin = {
    methods: {
         marked: function (input) {
            return marked (input, {gfm: true, breaks: false});
        },
    },
};

createApp(App)
    .mixin(markedMixin)
    .use(store)
    .use(router)
    .use(BootstrapVue3)
    .mount('#app')
