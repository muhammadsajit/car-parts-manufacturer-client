import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Blogs from './Pages/Blogs/Blogs';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import SignUp from './Pages/SignUp/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';

function App() {
  return (
    <div >
       <Navbar></Navbar>
       <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='login' element={<Login></Login>}></Route>
     <Route path='signup' element={<SignUp></SignUp>}></Route>
     <Route path='blogs' element={<Blogs></Blogs>}></Route>
     <Route path='myPortfolio' element={<MyPortfolio></MyPortfolio>}></Route>
     <Route path='*' element={<NotFound></NotFound>}></Route>


       </Routes>
      
    </div>
  );
}

export default App;
