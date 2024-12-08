const routes = [
    // {
    //   path: '/',
    //   component: () => import('layouts/MainLayout.vue'),
    //   children: [
    //     { path: '', component: () => import('pages/IndexPage.vue') }
    //   ]
    // },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: "/login",
        component: () =>
            import ("layouts/ExternalLayout.vue"),
        children: [{ path: "", component: () =>
                import ("pages/LoginPage.vue") }],
    },
    {
        path: "/register",
        component: () =>
            import ("pages/RegisterPage.vue"),
    },
    {
        path: "/",
        component: () =>
            import ("layouts/MainLayout.vue"),
        children: [{ path: "", component: () =>
                import ("pages/IndexPage.vue") }],
    },
    {
        path: "/:catchAll(.*)*",
        component: () =>
            import ("pages/ErrorNotFound.vue"),
    },
];

export default routes;