import { HelmetProps } from 'react-helmet'
import defaultConfig from './default'
import prodConfig from './prod'

export interface AppConfig {
  port?: number
  apiUrl?: string
  app?: HelmetProps
}

export default process.env.NODE_ENV === 'development'
  ? defaultConfig
  : { ...defaultConfig, ...prodConfig }
