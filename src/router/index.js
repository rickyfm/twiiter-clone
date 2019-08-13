import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SignUpForm from '@/components/Auth/SignUpForm'
import LoginForm from '@/components/Auth/LoginForm'
import UserProfileSettings from '@/components/User/Settings/UserProfileSettings'
import UserPasswordSettings from '@/components/User/Settings/UserPasswordSettings'
import Home from '@/components/Home'
import SingleTweet from '@/components/Tweet/SingleTweet'

/* eslint-disable no-new */
// eslint-disable-next-line

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
    	path: '/signup',
    	component: SignUpForm
    },
    {
    	path: '/login',
    	component: LoginForm
    },
    {
    	path: '/settings/profile',
    	component: UserProfileSettings
    },
    {
    	path: '/settings/password',
    	component: UserPasswordSettings
    },
    {
	    path: '/:username/status/:id',
	    component: SingleTweet,
	    props: true
	}
  ]
})
