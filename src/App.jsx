import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage';
import MainLayout from './layout/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';

const App = () => {

  const addJob = (newJob) => {
    console.log(newJob);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route route='/' element={<MainLayout />}> {/*any routes within here will use this layout*/}
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/jobs/:id' element={<JobPage />} loader={jobLoader} /> {/* :id is a symbol for whatever id is, we are also passing in a loader here */}
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} /> {/* passing in addjob function, so u can call it as addJobSubmit within addJobSubmit */}
        <Route path='/*' element={<NotFoundPage />} /> {/* /* is a catchall */}
      </Route>
    )
  );

  return (
    <RouterProvider router={router} /> // Whatever the router provides.     
  )
}

export default App