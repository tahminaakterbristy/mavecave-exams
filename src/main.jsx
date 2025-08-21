import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Pages/Home/Home';
import IeltsFees from './components/Pages/IetlsFees/IeltsFees';
import IeltsPractice from './components/Pages/IeltsPractice/IeltsPractice';
import IeltsTestCenter from './components/Pages/IeltsTestCenter/IeltsTestCenter';
import IeltsListeningExercise from './components/Pages/ListeningTest/IeltsListeningExercise';
import IeltsSpeaking from './components/Pages/IeltsSpeaking/IeltsSpeaking';









const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element:<Home></Home>, 
        
      },
      {
        path: '/ielts-fees',
        element:<IeltsFees></IeltsFees>
        
      },
      {
        path: '/ielts-practice',
        element:<IeltsPractice></IeltsPractice>
        
      },
      {
        path: '/ielts-center',
        element:<IeltsTestCenter></IeltsTestCenter>
        
      },
      {
        path: '/ielts-listening',
        element:<IeltsListeningExercise></IeltsListeningExercise>
        
      },
      {
        path: '/ielts-speaking',
        element:<IeltsSpeaking></IeltsSpeaking>
        
      },
     
      
    
    ]
  
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
 <RouterProvider router={router}></RouterProvider>
 
    
  </React.StrictMode>,
)

