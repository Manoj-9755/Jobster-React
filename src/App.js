import {Landing,Error,Register} from './pages/index'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import'react-toastify/dist/ReactToastify.css'
import {Addjobs,Alljob,Stats,Profile,Sharedlayout,Protectedroute} from './pages/Dashboard'

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={
    <Protectedroute>
    <Sharedlayout/>
    
    </Protectedroute>
    }>
      <Route index element={<Stats/>}/>
      <Route path='all-jobs' element={<Alljob/>}/>
      <Route path='add-jobs' element={<Addjobs/>}/>
      <Route path='profile' element={<Profile/>}/>


    </Route>
    <Route path='/landing' element={<Landing/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='*' element={<Error/>}/>

   </Routes>
   <ToastContainer position='top-center'/>
   </BrowserRouter>
  );
}

export default App;
