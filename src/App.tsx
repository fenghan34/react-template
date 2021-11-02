import { Helmet } from 'react-helmet'
import { renderRoutes, RouteConfig } from 'react-router-config'
import config from './config'

interface Route {
  route: { routes: RouteConfig[] }
}

const App = ({ route }: Route) => {
  return (
    <div>
      <Helmet {...config.app} />
      {renderRoutes(route.routes)}
    </div>
  )
}

export default App
