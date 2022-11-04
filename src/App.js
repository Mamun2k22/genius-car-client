import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Routes/Routes';

function App() {

  return (
    <div data-theme="winter" className='max-w-screen-xl mx-auto'>
      <RouterProvider router={router}>//tyytyty

      </RouterProvider>
    </div>
  );
}

export default App;
