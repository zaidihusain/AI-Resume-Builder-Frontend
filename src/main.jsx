import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { Router } from 'lucide-react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignInPage from './auth/sign-in/SignInPage.jsx'
import Home from './home/Home.jsx'
import Dashboard from './dashboard/dashboard.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import EditResume from './dashboard/resume/[resumeId]/edit/index.jsx'
import ViewResume from './my-resume/[resumeId]/view/index.jsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY



const router = createBrowserRouter([
  {
   
    element: <App />,
    children: [
    {
      path:'/Dashboard',
      element: <Dashboard/>
      
    },
    {
      path: '/dashboard/resume/:resumeId/edit',
      element: <EditResume />
    }
    ]
  },
  {
    path: '/',
    element: <Home />
  },
  {
    path:'/auth/sign-in',
    element: <SignInPage/>
  },
  {
    path:'/my-resume/:resumeId/view',
    element: <ViewResume/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    
   <RouterProvider router={router} />
   </ClerkProvider>
  </StrictMode>,
)
