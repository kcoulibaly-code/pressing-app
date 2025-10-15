import './bootstrap';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ExampleComponent from './Components/ExampleComponent.vue';

createApp(App)
    .use(router)
    .mount('#app');
