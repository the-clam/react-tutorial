import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage';
import MainLayout from './layout/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route route='/' element={<MainLayout />}> {/*any routes within here will use this layout*/}
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/jobs/:id' element={<JobPage />} loader={jobLoader} /> {/* :id is a symbol for whatever id is */}
      <Route path='/add-job' element={<AddJobPage />} />
      <Route path='/*' element={<NotFoundPage />} /> {/* /* is a catchall */}
    </Route>

  )
);

const App = () => {
  return (
    <RouterProvider router={router} /> // Whatever the router provides.     
  )
}

export default App