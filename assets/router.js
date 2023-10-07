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
            path: "/servico",
            component: "servico-page",
            action: () => import("./pages/servico-page") 
        },

        {
            path: "/sobre-nos",
            component: "sobre-nos-page",
            action: () => import("./pages/sobre-nos-page") 
        },
    ])

    return router
}