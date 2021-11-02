import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import createRootReducer from './reducers'

const createStore = ({ initialState }: any = {}) => {
  const history = createBrowserHistory()
  const store = configureStore({
    preloadedState: initialState,
    reducer: createRootReducer(history),
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware(),
      routerMiddleware(history),
    ],
    devTools: process.env.NODE_ENV === 'development',
  })

  return { store, history }
}

const { store } = createStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk = ThunkAction<void, AppState, unknown, Action<string>>

export default createStore
