import { connectRouter } from 'connected-react-router'
import { History } from 'history'

const createRootReducer = (history: History) => ({
  router: connectRouter(history),
  // ...reducers
})

export default createRootReducer
