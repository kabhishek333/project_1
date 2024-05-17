import {BrowserRouter, Routes, Route, UNSAFE_DataRouterContext} from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Add from './Components/Pages/User/Add';
import Show from './Components/Pages/User/Show';
import Update from './Components/Pages/User/Update';
import Delete from './Components/Pages/User/Delete';
import Signup from './Components/Pages/User/Signup';
import Otp from './Components/Pages/User/Otp';


function App() {

  return (
    <>
      {/* <h1>App Component</h1>
      <h1>Hello</h1>  */}
      <BrowserRouter>
      <Navbar />
        <Routes>
          
            <Route path='/add' element={<Add/>}/>
            <Route path='/user/show' element={<Show/>}/>
            <Route path='/user/update/:userId' element={<Update/>}/>
            <Route path='/user/delete/:userId' element={<Delete/>}/>
            <Route path='/user/signup/' element={<Signup/>} />
            <Route path='/user/otp/' element={<Otp/>} />


        </Routes>
      </BrowserRouter>

    </>
  );
}
export default App;
