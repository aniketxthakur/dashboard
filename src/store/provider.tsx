"use client"
import { Provider } from 'react-redux'
import store from './store'


export default function Mainapp (props:any) {
  return (
        <Provider store={store}>
          {props.children}
        </Provider>
  )
}