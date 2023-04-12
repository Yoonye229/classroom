import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { CourseContextProvider } from './context/CourseContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <CourseContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CourseContextProvider>
  </AuthContextProvider>
);
