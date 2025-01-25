import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'
import App from './App.jsx'


export const Context = createContext({isAuthenticated : false})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-n3up4ppi4ue2jc6n.us.auth0.com"
      clientId="zN2leJYpZMSAb3Ns0VKpbr8Bnwz3ymYS"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>,
)
