import React from 'react';
import {Routes, Route, Outlet} from 'react-router-dom';
import "./App.css";
import Navigation from "./components/navigation/navigation.component";

const FirstPage = () =>{
  return(
    <h1>I am the First Page of this Website.</h1>
  );
};

const SecondPage = () =>{
  return(
    <h1>I am the Second Page of this Website.</h1>
  );
};
const ThirdPage = () =>{
  return(
    <h1>I am the ThirdPage Page of this Website.</h1>
  );
};

const App = () => {
  return(
    <Routes>
      <Route path = "/" element = {<Navigation/>}>
      <Route path = "first" element = {<FirstPage/>}/>
      <Route path = "second" element = {<SecondPage/>}/>
      <Route path = "third" element = {<ThirdPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
