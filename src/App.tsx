import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { ReactQueryDevtools} from 'react-query/devtools'
import Home from './pages/Home';

const queryClient = new QueryClient()

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route index element={<Home />}/>
    </Route>
  )
)

function App() {
  const cookies = new Cookies()

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
