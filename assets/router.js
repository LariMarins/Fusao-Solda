import { Router } from "@vaadin/router";

export function initRouter() {
    const router = new Router (document.querySelector('#app'))

    router.setRoutes([
        {
            path: "/",
            component: "home-page",
            action: () => import("./pages/home-page") 
        },
        {
            path: "/serviços",
            component: "serviços-pages",
            action: () => import("./pages/servico-page") 
        },
    ])

    return router
}