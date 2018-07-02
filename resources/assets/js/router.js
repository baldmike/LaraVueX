import VueRouter from 'vue-router'
import MainApp from './components/MainApp'

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/', 
            component: MainApp
        },
    ]
})
