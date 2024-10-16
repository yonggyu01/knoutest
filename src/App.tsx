import React from 'react';
import Datapage from './main/datastructure/datapage';
import Indexpage from './main/indexpage/indexpage';
import Datainner from './main/datastructure/datainner';
import './App.css';
import {  Route , RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-router-dom';
import './reset.css';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Indexpage/>} errorElement={<></>} >
        <Route index element={ <Datapage></Datapage>}/>
        <Route path='datainner/:data' element={ <Datainner></Datainner>}/>
      </Route>
      )
      )
  return (
    <div className="App">
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
