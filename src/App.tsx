import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Games from './pages/Games';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Games />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;