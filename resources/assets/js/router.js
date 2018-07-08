import VueRouter from 'vue-router'
import MainApp from './components/MainApp'
import pagex from './components/PageX'
import pagey from './components/PageY'

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/', component: MainApp,
            children: [
                {
                    path: 'dashboard',
                    component: pagex,
                    name: 'dashboard',
                    title: 'Dashboard',
                },
                {
                    path: 'admin',
                    component: pagey,
                    name: 'admin',
                    title: 'Admin',
                }
            ]
        },
    ]
})
