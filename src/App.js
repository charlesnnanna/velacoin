import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './App.css';
import Header from './components/Header';
import AboutPage from './pages/AboutPage/AboutPage';
import FaqPage from './pages/FaqPage/FaqPage';
import HomePage from './pages/HomePage/HomePage';
import { selectNav } from './redux/nav/navSlice';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



function App() {
  const nav = useSelector(selectNav)

  return (
    <div className={ classNames(
      nav === "home" ? "bg-home" : "bg-black", "text-white App"
    )}>
      {nav === "home"  && <HomePage/>}
      {nav === "about" && <AboutPage/>}
      {nav === "faq" && <FaqPage/>}
    </div>
  );
}

export default App;
