import { createContext, useEffect, useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

//import Home from './pages/Home';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { URL } from './helper/helper';
import { allPublicRoutes } from './routes/allRoutes';



//PO.then().catch().finally();


//1. InitialState
export const initialState = {
  movies:[
    {
    name:'Alone2',
    image:'http://pixner.net/boleto/demo/assets/images/movie/movie01.jpg'
  },
  {
    name:'Mars2',
    image:"http://pixner.net/boleto/demo/assets/images/movie/movie02.jpg"
  },
  {
    name:'Venus2',
    image:"http://pixner.net/boleto/demo/assets/images/movie/movie03.jpg"
  }
],
  cart:[] 
}

export const MovieContext = createContext();

function App() {
  //2.1 ooks Area
  const [initialState,setInitialState] = useState({
                                                      movies:[/*
                                                        {
                                                          name:'Alone2',
                                                          image:'http://pixner.net/boleto/demo/assets/images/movie/movie01.jpg'
                                                        },
                                                        {
                                                          name:'Mars2',
                                                          image:"http://pixner.net/boleto/demo/assets/images/movie/movie02.jpg"
                                                        },
                                                        {
                                                          name:'Venus2',
                                                          image:"http://pixner.net/boleto/demo/assets/images/movie/movie03.jpg"
                                                        }
                                                      */],
                                                      cart:[] 
                                                    });

  useEffect(()=>{
    axios.get(`${URL}/api/movies?populate=*`)
  .then(function (response) {
    // handle success
    console.log('response----->>',response.data.data);
    setInitialState({
      ...initialState,
      movies: [
        ...initialState.movies,
        ...response.data.data.map((cv,idx,arr)=>{
          return {
            name:cv.attributes.name,
            image:URL+cv.attributes.image_thumb.data.attributes.url
          }
        })
      ]
    })
    console.log('mapped as per initial object--->',response.data.data.map((cv,idx,arr)=>{
      return {
        name:cv.attributes.name,
        image:URL+cv.attributes.image_thumb.data.attributes.url
      }
    }));
    /*setInitialState({
      ...initialState,
      movies:[...response.data.data]
    });*/
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
  },[])

  //2.2 Function Defination Area


  //2.3 Return Statement
    return (
          //<MovieContext.Provider value={initialState}>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Layout />}>
                    {
                      allPublicRoutes && allPublicRoutes.map((cv,idx,arr)=>{
                        return <Route key={idx} path={cv.path} element={cv.element}></Route>
                      })
                    }
                  </Route>
                  <Route path="/sign-in" element={<SignIn />}></Route>
                  <Route path="/sign-up" element={<SignUp />}></Route>
                  <Route path="*" element={<NoPage />}></Route>
                </Routes>
              </BrowserRouter>
          //</MovieContext.Provider> 
    );
  }

export default App;
