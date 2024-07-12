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
			component: () => import("../views/pages/LoginPageDefault.vue"),
		},
		{
			path: "/loginwithapi",
			name: "loginwithapi",
			component: () => import("../views/pages/LoginWithApi.vue"),
		},
		{
			path: "/agevalidation",
			name: "agevalidation",
			component: () => import("../views/pages/AgeValidation.vue"),
		},
		{
			path: "/counterapp",
			name: "counterapp",
			component: () => import("../views/pages/CounterApp.vue"),
		},
		{
			path: "/datepickerwith180days",
			name: "datepickerwith180days",
			component: () => import("../views/pages/DatePickerwith180days.vue"),
		},
		{
			path: "/randomquotes",
			name: "randomquotes",
			component: () => import("../views/pages/RandomQuotes.vue"),
		},
		{
			path: "/togglepasswordvisibility",
			name: "togglepasswordvisibility",
			component: () => import("../views/pages/TogglePasswordVisibility.vue"),
		},
		
		{
			path: "/randomcolorgenerator",
			name: "randomcolorgenerator",
			component: () => import("../views/pages/RandomColorGenerator.vue"),
		},
		
		{
			path: "/passwordgenerator",
			name: "passwordgenerator",
			component: () => import("../views/pages/PasswordGenerator.vue"),
		},
		{
			path: "/currencyconverter",
			name: "currencyconverter",
			component: () => import("../views/pages/CurrencyConverter.vue"),
		},
		{
			path: "/leapyearchecker",
			name: "leapyearchecker",
			component: () => import("../views/pages/LeapYearChecker.vue"),
		},
		{
			path: "/tipcalculator",
			name: "tipcalculator",
			component: () => import("../views/pages/TipCalculator.vue"),
		},
		{
			path: "/formvalidation",
			name: "formvalidation",
			component: () => import("../views/pages/FormValidation.vue"),
		},
		{
			path: "/:pathMatch(.*)*",
			name: "NotFound",
			component: () => import("../views/NotFound.vue"),
		},
	],
});

export default router;
