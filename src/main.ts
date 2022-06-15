import { createApp } from 'vue'
import App from './App.vue'
import Equal from 'equal-vue';

// Styles
import 'equal-vue/dist/style.css';
import './assets/style/app.scss';

createApp(App)
	.use(Equal)
	.mount('#app')
