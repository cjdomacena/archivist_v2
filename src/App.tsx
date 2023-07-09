import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import RootLayout from './pages/Root';

function App() {

    const router = createBrowserRouter(createRoutesFromElements(<Route path='/' element={<RootLayout />}>
        <Route index element={<HomePage />} />
    </Route>));

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
