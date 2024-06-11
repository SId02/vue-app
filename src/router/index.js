import { createRouter, createWebHistory } from "vue-router";
// import HomeView from '../views/HomeView.vue'

const HomeView = () => import("../views/HomeView.vue");

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/about",
			name: "about",
			component: () => import("../views/AboutView.vue"),
		},
		{
			path: "/contact",
			name: "contact",
			component: () => import("../views/ContactView.vue"),
		},
		{
			path: "/logindefault",
			name: "logindefault",
			component: () => import("../views/LoginPageDefault.vue"),
		},
		{
			path: "/loginwithapi",
			name: "loginwithapi",
			component: () => import("../views/LoginWithApi.vue"),
		},
		{
			path: "/:pathMatch(.*)*",
			name: "NotFound",
			component: () => import("../views/NotFound.vue"),
		},
	],
});

export default router;
