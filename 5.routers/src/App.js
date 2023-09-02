import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Error from './components/Pages/Error';
import Navigation from './components/Navigation';
import Pricing from './components/Pricing/Pricing';
import User from './components/Pages/User';
import Free from './components/Pricing/Free';
import Premium from './components/Pricing/Premium';
import Login from './components/Pages/Login';
import Exclusive from './components/Exclusive';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return(
       <div>
        <Navigation/>
        <Login/>
         <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<h1>contact</h1>}/>
          <Route path="*" element={<Error/>}/>

           {/*PASSING DATA TO ROUTE*/ }
          <Route path="/about" state={{myKey:"keyyy",keyNo:"21"}} element={<h1>About</h1>}/>

          <Route path="/user/:userId/" element={<User/>}/>
          <Route path="/user/:userId/:projectId" element={<User/>}/>
          
          {/*PROTECTED ROUTE*/ }
           <Route element={<ProtectedRoute/>}>
             <Route path="/prime" element={<Exclusive/>}/>
          </Route>
          
           {/*NESTED ROUTE*/ }
          <Route path="/pricing" element={<Pricing/>}>
            <Route path="free" element={<Free/>}/>
            <Route path="premium" element={<Premium/>}/>
          </Route>

          
           {/*NESTED ROUTE*/ }
          {/* <Route path="/messages" element={<Messages/>}>
               <Route path=":id" element={<Chats/>}/>
          </Route> */}

         </Routes>
       </div>
    
  );
}

export default App;
