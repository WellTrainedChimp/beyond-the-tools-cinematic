import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Application from './components/Application.jsx'
import './index.css'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/application",
        element: <Application />,
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
