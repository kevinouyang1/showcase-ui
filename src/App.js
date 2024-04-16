import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DefaultLayout from './layouts/Default';
import CallbackComponent from './components/SpotifyCallbackHandler';


const router = createBrowserRouter([
  { path: '/', element: <DefaultLayout/> },
  { path: '/callback', element: <CallbackComponent/> },
])

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
