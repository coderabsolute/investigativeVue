import LoginPage from '@/pages/Login'
import DashboardPage from '@/pages/Dashboard'
import NotFoundPage from '@/pages/404'

import CourseListPage from '@/pages/course/CourseList'
import CourseAddPage from '@/pages/course/CourseAdd'
import CourseEditPage from '@/pages/course/CourseEdit'

export const routeList = [
  {
    path: '/',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/404',
    component: NotFoundPage,
    name: 'notFound',
    hidden: true
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardPage,
    children: [
      { path: '/courseList', name: 'courseList', component: CourseListPage, meta: { pageTitle: 'Course / List' } },
      { path: '/courseAdd', name: 'courseAdd', component: CourseAddPage, meta: { pageTitle: 'Course / Add' } },
      { path: '/courseEdit/:id', name: 'courseEdit', component: CourseEditPage, meta: { pageTitle: 'Course / Edit' } }
    ]
  },
  {
    path: '*',
    hidden: true,
    redirect: { path: '/404' }
  }
]
