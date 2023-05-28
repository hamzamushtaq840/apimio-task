import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Protected from './layouts/Protected';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        {/* Protected Routes */}
        <Route element={<Protected />}>
          <Route path="/home" element={<Navbar ><Home /></Navbar >}></Route>
        </Route>
      </Routes>
      <ToastContainer autoClose={1500} />
    </BrowserRouter>
  )
}

export default App
