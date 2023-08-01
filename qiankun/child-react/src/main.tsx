import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createLifecyle, getMicroApp } from 'vite-plugin-legacy-qiankun'

const appName = import.meta.env.BASE_UR;
const microApp = getMicroApp(appName)

const render = () => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}

if (microApp.__POWERED_BY_QIANKUN__) {
  createLifecyle(appName, {
    mount() {
      render();
    },
    bootstrap() {
      console.log('bootstrap', appName);
    },
    unmount() {
      console.log('unmount', appName)
    }
  })
} else {
  render();
}