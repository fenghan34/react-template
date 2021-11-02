import { RouteConfig } from 'react-router-config'
import App from '../App'
import Home from '../pages/home'

export default [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
    ],
  },
] as RouteConfig[]
