import Home from "./pages/home/Home";
import {createBrowserRouter, RouterProvider, Routes, Route, BrowserRouter} from 'react-router-dom'
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";


function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element= {<Home />} />
          <Route path='/login' element = {<Login />} />
          <Route path='/users' element = {<List />} >
              <Route path=':userId' element= {<Single />} />
              <Route path='new' element= {<New />} />
          </Route>
          <Route path='/products' element={<List />} >
              <Route path=":productId" element = {<Single />} />
              <Route path="new" element = {<New />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
