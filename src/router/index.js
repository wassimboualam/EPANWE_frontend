import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WebLayout from '@/layout/web/WebLayout.vue'
import TestView from '@/views/TestView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/test',
      name: 'test_route',
      component: TestView,
    },
    {
      path: '/',
      name: 'web_layout',
      component: WebLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue'),
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('../views/ContactView.vue'),
        },
        // {
        //   path: '/programs',
        //   name: 'programs',
        //   component: () => import('../views/ProgramsView.vue'),
        // },
        // {
        //   path: '/programs/:id',
        //   name: 'program details',
        //   component: () => import('../views/ProgramDetailsView.vue'),
        // },
        {
          path: '/howtojoin',
          name: 'how to join',
          component: () => import('../views/HowJoinUsView.vue'),
        },
        {
          path: '/join/paricipant',
          name: 'how to join as a participant',
          component: () => import('../views/HowJoinUsView.vue'),
        },
        {
          path: 'terms',
          name: 'terms of service',
          component: () => import('@/views/TermsOfServiceView.vue')
        },
        // {
        //   path: '/partner',
        //   name: 'partner form',
        //   component: () => import('../views/PartnerJoinView.vue'),
        // },
        {
          path: '/:pathMatch(.*)*',
          name: 'not found',
          component: () => import('../views/NotFoundView.vue'),
        },
      ],
    },
    {
      path: '/account',
      component: () => import('@/layout/registration/Base.vue'),
      children: [
        {
          path: '/login',
          component: () => import('../views/LoginView.vue'),
        },
        {
          path: '/register',
          component: () => import('../views/RegisterView.vue'),
        },
      ],
    },
    {
      path: '/dashboard',
      component: () => import('../layout/dashboard/Base.vue'),
      children: [
        // participant/user routes
        {
          path: '',
          name: 'overview',
          component: () => import('../views/dashboard/BaseDashboardView.vue'),
        },
        {
          path: 'profile',
          name: 'profile',
          component: () => import('../views/dashboard/profile/ProfileView.vue'),
        },
        {
          path: 'emailchange/:id(.*)',
          name: 'emailChangePage',
          component: () => import('../views/dashboard/profile/EmailChangePageView.vue'),
        },
      ],
    },
  ],
})

export default router
