import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './Components/Home';
import Contact from './Components/Contact';
import Blogs from './Components/Blogs';
import Error from './Components/Error';
import Blog from './Components/Blog'
import Navbar from './Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Contact' element= {<Contact />}/>
        <Route path='/Blogs' element={<Blogs />}/>
        <Route path='/Blogs/:title' element={<Blog />}></Route>
        <Route path='*' element={<Error />}/>
      </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
