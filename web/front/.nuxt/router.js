import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1b62b694 = () => interopDefault(import('..\\pages\\imageswap.vue' /* webpackChunkName: "pages/imageswap" */))
const _e4739c00 = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages/signup" */))
const _de122054 = () => interopDefault(import('..\\pages\\videoswap.vue' /* webpackChunkName: "pages/videoswap" */))
const _06e83e1a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/imageswap",
    component: _1b62b694,
    name: "imageswap"
  }, {
    path: "/signup",
    component: _e4739c00,
    name: "signup"
  }, {
    path: "/videoswap",
    component: _de122054,
    name: "videoswap"
  }, {
    path: "/",
    component: _06e83e1a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
