import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './routes/AppRouter'
import { NavBar } from './components/NavBar'
import { Home } from './components/Home'


function App() {

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
