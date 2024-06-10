// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Button, Tabbar, TabbarItem ,Icon,Tab, Tabs,NavBar,Swipe, SwipeItem,Loading,Slider} from 'vant';


// 2. 引入组件样式
import 'vant/lib/index.css';

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(createPinia())
app.use(router).use(Slider)
app.use(Button).use(Tabbar).use(TabbarItem).use(Icon).use(Tab).use(Tabs).use(NavBar).use(Swipe).use(SwipeItem).use(Loading)
app.mount('#app')
