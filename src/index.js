import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import { routing } from './router';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCnCkuXcWvVfGVEyKz5thvOyKvmpkdIorg',
  authDomain: 'nilucine.firebaseapp.com',
  projectId: 'nilucine',
  storageBucket: 'nilucine.appspot.com',
  messagingSenderId: '535518418727',
  appId: '1:535518418727:web:52a115d1c8e8b355a7bb02',
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routing} />
  </React.StrictMode>,
);

reportWebVitals();
