import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import login from '@/views/home/login'
import regist from '@/views/home/regist'
import usercenter from '@/views/usercenter/index'
import personal_info from '@/views/usercenter/personal_info'
import modify_password from '@/views/usercenter/modify_password'
import google_verification from '@/views/usercenter/google_verification'
import video_authentication from '@/views/usercenter/video_authentication'
import sjty from '@/views/usercenter/sjty'
import Info_authentication from '@/views/usercenter/Info_authentication'
import modify_password_status from '@/views/usercenter/modify_password_status'
import real_name_authentication from '@/views/usercenter/real_name_authentication'
import video_authentication_status from '@/views/usercenter/video_authentication_status'
import google_success from '@/views/usercenter/google_success'
import web_Mail from '@/views/usercenter/web_Mail'
import findpassword from '@/views/home/findpassword'
import Success from '@/views/home/success'
import welcome from '@/components/home/welcome'
import nav from '@/components/home/welcome2'
import Roadmap from '@/components/roadmap'
import Concat from '@/components/concat'
import Affiche from '@/components/affiche'
import Introduce from '@/components/introduce'
import HeaderBox from '@/components/headerbox'
import Enter from '@/components/enter'
import Value from '@/components/value'
import Details from '@/components/details'
import Activity from '@/components/activity'
import Namecheck from '@/views/usercenter/name_check'
import Nametoken from '@/views/usercenter/name_token'
import Agreement from '@/views/usercenter/agreement'


Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [{
      path: '/',
      name: 'welcome',
      //redirect: "/",
      component: welcome,
    },
    {
      path: '/nav',
      name: 'nav',
      //redirect: "/",
      component: nav,
    },
    {
      path: '/home',
      name: 'Home',
      //redirect: "/",
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/regist',
      name: 'regist',
      component: regist,
    },
    {
      path: '/Success',
      name: 'Success',
      component: Success,
    },
    {
      path: '/usercenter',
      name: 'usercenter',
      component: usercenter,
      children: [
        {
          path: '/personal_info',
          name: 'personal_info',
          component: personal_info,
        },
        {
          path: '/namecheck',
          name: 'namecheck',
          component: Namecheck,
        },
        {
          path: '/nametoken',
          name: 'nametoken',
          component: Nametoken,
        },
        {
          path: '/agreement',
          name: 'agreement',
          component: Agreement,
        },
        {
          path: '/modify_password',
          name: 'modify_password',
          component: modify_password,
        },
        {
          path: '/google_verification',
          name: 'google_verification',
          component: google_verification,
        },
        {
          path: '/video_authentication',
          name: 'video_authentication',
          component: video_authentication,
        },
        {
          path: '/web_Mail',
          name: 'web_Mail',
          component: web_Mail,
        },
        {
          path: '/Info_authentication',
          name: 'Info_authentication',
          component: Info_authentication,
        },
        
        {
          path: '/time_item',
          name: 'sjty',
          component: sjty,
        },
        // {
        //   path: '/google_status',
        //   name: 'google_status',
        //   component: google_success,
        // },
        {
          path: '/google_status',
          name: 'google_status',
          component: google_success,
        },
        {
          path: '/video_authentication_status',
          name: 'video_authentication_status',
          component: video_authentication_status,
        },
        {
          path: '/modify_password_status',
          name: 'modify_password_status',
          component: modify_password_status,
        },
        {
          path: '/real_name_authentication',
          name: 'real_name_authentication',
          component: real_name_authentication,
        },
      ]
    },
    {
      path: '/findpassword',
      name: 'findpassword',
      component: findpassword,
    },
    {
      path: '/headerbox',
      name: 'headerbox',
      component: HeaderBox,
      children: [{
          path: '/introduce',
          component: Introduce
        },
        {
          path: '/enter',
          component: Enter
        },
        {
          path: '/affiche',
          component: Affiche
        },
        {
          path: '/activity',
          component: Activity
        },
        {
          path:'/details',
          name:'details',
          component:Details
        },
        {
          path: '/value',
          component: Value
        },
        {
          path: '/roadmap',
          component: Roadmap
        },
        {
          path: '/concat',
          component: Concat
        }
      ]
    }
  ]
})
