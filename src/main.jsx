import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PostsProvider from './Context/PostsContext.jsx'
import 'remixicon/fonts/remixicon.css';


import App from './App.jsx'
import './Style/main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PostsProvider>
      <App />
    </PostsProvider>
  </StrictMode>,
)
