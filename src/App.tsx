import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Router from './router/Router'
import { UserProvider } from './providers/UserProvider'

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
