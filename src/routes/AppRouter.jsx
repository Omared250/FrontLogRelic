import { Routes, Route } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { SendLogOption1 } from '../components/SendLogOption1';
import { SendLogsCopyPasteOption } from '../components/SendLogsCopyPasteOption';
import { Home } from '../components/Home';

export const AppRouter = () => {
  return (
    <div className="App">
        <NavBar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/custom-log' element={<SendLogOption1/>} />
            <Route path='/cpy-paste-log' element={<SendLogsCopyPasteOption/>} />
        </Routes>
    </div>
  )
}