import { Routes, Route } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { SendLogOption1 } from '../components/SendLogOption1';
import { SendLogsCopyPasteOption } from '../components/SendLogsCopyPasteOption';

export const AppRouter = () => {
  return (
    <div className="App">
        <NavBar />
        <Routes>
            <Route path='/calendar' element={<SendLogOption1/>} />
            <Route path='/tasks' element={<SendLogsCopyPasteOption/>} />
        </Routes>
    </div>
  )
}