import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import HomePage from './pages/Home';
import RootLayout from './pages/Root';
import CardPage from './pages/cards';

function App() {

    const router = createBrowserRouter(createRoutesFromElements(<Route path='/' element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/card/:id' element={<CardPage />} />
    </Route>));

    return (
        <>
            <RouterProvider router={router} />

        </>
    );
}

export default App;
