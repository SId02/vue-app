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
			path: "/project",
			name: "project",
			component: () => import("../views/ProjectView.vue"),
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
			path: "/agevalidation",
			name: "agevalidation",
			component: () => import("../views/AgeValidation.vue"),
		},
		{
			path: "/counterapp",
			name: "counterapp",
			component: () => import("../views/CounterApp.vue"),
		},
		{
			path: "/datepickerwith180days",
			name: "datepickerwith180days",
			component: () => import("../views/DatePickerwith180days.vue"),
		},
		{
			path: "/randomquotes",
			name: "randomquotes",
			component: () => import("../views/RandomQuotes.vue"),
		},
		{
			path: "/togglepasswordvisibility",
			name: "togglepasswordvisibility",
			component: () => import("../views/TogglePasswordVisibility.vue"),
		},
		
		{
			path: "/randomcolorgenerator",
			name: "randomcolorgenerator",
			component: () => import("../views/RandomColorGenerator.vue"),
		},
		
		
		{
			path: "/:pathMatch(.*)*",
			name: "NotFound",
			component: () => import("../views/NotFound.vue"),
		},
	],
});

export default router;
