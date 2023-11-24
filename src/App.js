import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Protected from './Protected';
import Searchlogic from './Searchlogic';
import Form from './Form';
import Posting from './Posting';


function App() {
  return (
    <>
    {/* <BrowserRouter>
    <Routes>
       <Route path="/" element={<Layout />}>
         <Route index  element={<Home />} />
         <Route path="/about" element={<Protected Component={About}/>} />
         <Route path="/contact" element={<Protected Component={Contact} />} />
         <Route path="/login" element={<Login/>} />
         
         </Route>
     </Routes>
   </BrowserRouter> */}
   {/* <Searchlogic/> */}
   {/* <Form/> */}
   <Posting/>
   


  
    </>
  );
}

export default App;
