import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './pages/Styles/global'
import Routering from './Routes/route'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Routering />
  </React.StrictMode>,
)
