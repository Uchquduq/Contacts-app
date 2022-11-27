import { createRouter, createWebHistory } from 'vue-router'
import ContactList from '../views/ContactList.vue'

import ContactLayout from '../views/Layout.vue'
import ContactDetails from '../views/contact/Details.vue'
import ContactEdit from '../views/contact/Edit.vue'
import ContactCreate from '../views/Create.vue'

const routes = [
    {
        path: '/',
        name: 'ContactList',
        component: ContactList
    },
    {
        path: '/create',
        name: 'ContactCreate',
        component: ContactCreate
    },
    {
        path: '/contact/:id',
        name: 'ContactLayout',
        props: true,
        component: ContactLayout,
        children: [{
            path: '',
            name: 'ContactDetails',
            component: ContactDetails,
        },
        {
            path: 'edit',
            name: 'ContactEdit',
            component: ContactEdit,
        }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router