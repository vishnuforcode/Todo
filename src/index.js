import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

import Layout from './components/Layout';
import Home from './Pages/Home';
import UpdateTodo from './Pages/UpdateTodo';
import { RouterProvider } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AiAssistant from './Pages/AiAssistant'
import Album from './Pages/Album';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='updatetodo/:id' element={<UpdateTodo/>}/>
      <Route path='Aihelp' element={<AiAssistant/>}/>
      <Route path='album' element={<Album/>}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    
<RouterProvider router={router}>


    

    </RouterProvider>
    
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
