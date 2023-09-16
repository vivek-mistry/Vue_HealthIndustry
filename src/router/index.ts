import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginVue from '@/views/pages/Login.vue'
import RegisterVue from '@/views/pages/Register.vue'
import DoctorList from '@/views/pages/DoctorList.vue'
import DashboardVue from '@/views/pages/Dashboard.vue'
import DoctorAddVue from '@/views/pages/DoctorAdd.vue'
import PatientAddVue from '@/views/pages/PatientAdd.vue'
import PatientListVue from '@/views/pages/PatientList.vue'
import DepartmentListVue from '@/views/pages/DepartmentList.vue'
import DepartmentAddVue from '@/views/pages/DepartmentAdd.vue'
import DepartmentEditVue from '@/views/pages/DepartmentEdit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
        path: '/',
        name: 'login',
        component: LoginVue
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterVue
    },
    {
      path: '/',
      name: 'MasterView',
      component: import('../views/common/Master.vue'),
      children:[
        {
          path: 'doctor/list',
          name: "DoctorList",
          component: DoctorList
        },
        {
          path: 'doctor/add',
          name: "DoctorAdd",
          component: DoctorAddVue
        },
        {
          path: 'patient/list',
          name: "PatientList",
          component: PatientListVue
        },
        {
          path: 'patient/add',
          name: "PatientAdd",
          component: PatientAddVue
        },
        {
          path: 'department/list',
          name: "DepartmentList",
          component: DepartmentListVue
        },
        {
          path: 'department/edit/:id',
          name: "DepartmentEdit",
          props:true,
          component: DepartmentEditVue
        },
        {
          path: 'department/add',
          name: "DepartmentAdd",
          component: DepartmentAddVue
        },
        {
          path: 'dashboard/',
          name: "DashboardVue",
          component: DashboardVue
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
