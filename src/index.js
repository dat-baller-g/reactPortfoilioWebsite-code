import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams, BrowserRouter, Routes} from "react-router-dom";
import EcommerceApp from "./components/routes/Ecommerce";
import Todo from "./components/routes/Todo";
import Weather from "./components/routes/Weather";
import Exercise from "./components/routes/Exercise";
import AboutMe from './components/routes/AboutMe';


var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});







// var themeToggleBtn = document.getElementById("themeToggleBtn")
// themeToggleBtn.addEventListener('click', function() {

//   // toggle icons inside button
//   // themeToggleDarkIcon.classList.toggle('hidden');
//   // themeToggleLightIcon.classList.toggle('hidden');

//   // if set via local storage previously
//   if (localStorage.getItem('color-theme')) {
//       if (localStorage.getItem('color-theme') === 'light') {
//           document.documentElement.classList.add('dark');
//           localStorage.setItem('color-theme', 'dark');
//       } else {
//           document.documentElement.classList.remove('dark');
//           localStorage.setItem('color-theme', 'light');
//       }

//   // if NOT set via local storage previously
//   } else {
//       if (document.documentElement.classList.contains('dark')) {
//           document.documentElement.classList.remove('dark');
//           localStorage.setItem('color-theme', 'light');
//       } else {
//           document.documentElement.classList.add('dark');
//           localStorage.setItem('color-theme', 'dark');
//       }
//   }
  
// });

ReactDOM.render(
  <BrowserRouter >
  <Routes>
  <Route path="/" element={<App />} />
  <Route path="ecommerce" element={<EcommerceApp />} />
  <Route path="todo" element={<Todo />} />
  <Route path="weather" element={<Weather />} />
  <Route path="exercise" element={<Exercise />} />
  <Route path="aboutMe" element={<AboutMe />} />
  </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
//basename={process.env.PUBLIC_URL}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
