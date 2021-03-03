import { createApp } from 'vue';
import Antd from 'ant-design-vue';

/* project scss settings */
import './assets/antd/index.less';
import './assets/scss/index.scss';

import App from './App.vue';

const app = createApp(App);
app.use(Antd);
app.mount('#app');
