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
import Summary from './Pages/Home/Summary';
import Footer from './Footer/Footer';

import Purchase from './Pages/Purchase/Purchase';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddProduct from './Pages/Dashboard/AddProduct';


function App() {
  return (
    <div className='mx-auto' >
       <Navbar></Navbar>
       <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='login' element={<Login></Login>}></Route>
     <Route path='signup' element={<SignUp></SignUp>}></Route>
     <Route path='blogs' element={<Blogs></Blogs>}></Route>
     <Route path='summary' element={<Summary></Summary>}></Route>
     <Route path='purchase/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
     <Route path='dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>

       <Route index element={<MyProfile></MyProfile>}></Route>
       <Route path='review' element={<AddReview></AddReview>}></Route>
       <Route path='adminUser' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
       <Route path='addProduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
       <Route path='orders' element={<MyOrder></MyOrder>}></Route>



     </Route>

     <Route path='myPortfolio' element={<MyPortfolio></MyPortfolio>}></Route>
     <Route path='*' element={<NotFound></NotFound>}></Route>


       </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
      
    </div>
  );
}

export default App;
