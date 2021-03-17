import { ListComponent } from "./pages/list.js"
import { FormComponent } from "./pages/form.js"
import { WelcomeComponent } from "./pages/about.js"


export const routes = [
    {
        path: '/',
        component: WelcomeComponent
    },
    {
        path: '/view/:id',
        component: FormComponent,
        name: 'Visual'
    },
    {
        path: '/list',
        component: ListComponent,
        name: 'Listar'
    },
    {
        path: '/edit/:id',
        component: FormComponent,
        name: 'Editar'
    },
    {
        path: '/excluir/:id',
        component: FormComponent,
        name: 'Excluir'
    }
]